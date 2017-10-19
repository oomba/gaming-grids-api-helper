using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace GamingGridsApiHelper
{
    public class APIHelper
    {
        public List<Type> GetTypes(string dll)
        {
            Assembly assembly = Assembly.LoadFrom(dll);
            return assembly.GetTypes().Where(t => t.Name.EndsWith("Controller")).ToList();
        }

        public string GetRoutePrefix(Type type)
        {
            var routePrefix = "";
            foreach (var attr in type.GetCustomAttributes())
            {
                if (attr.GetType() == typeof(RoutePrefixAttribute))
                {
                    routePrefix = ((RoutePrefixAttribute)attr).Prefix;
                }
            }
            return routePrefix;
        }

        public Type GetListType(Type type)
        {
            Type listType = null;
            if (type.FullName == "GamingGrids.Processing.Models.Brackets.BracketTeamModel[][]")
            {

            }
            foreach (Type interfaceType in type.GetInterfaces())
            {
                if (interfaceType.IsGenericType && interfaceType.GetGenericTypeDefinition()
                    == typeof(IList<>))
                {
                    listType = interfaceType.GetGenericArguments()[0];
                    break;
                }
            }
            if (listType == null)
            {
                listType = type;
            }
            return listType;
        }

        public Param GetComplexParam(string name, Type type, int currentLevel = 0, int maxLevel = 10)
        {
            var param = new Param(name);
            if (type.IsPrimitive || type.Namespace == "System")
            {
                param.Type = type.ToString();
            }
            else if ((type.UnderlyingSystemType.Name == "HttpRequestMessage") || (type == typeof(System.Web.Http.IHttpActionResult)))
            {
                param.Type = "String";
            }
            else if (type == typeof(System.Net.HttpStatusCode))
            {
                param.Type = "Number";
            }
            else if (type.UnderlyingSystemType.GetInterface("IEnumerable") != null)
            {
                param.IsList = true;
                var listType = GetListType(type);
                if (listType.IsPrimitive || listType.Namespace == "System")
                {
                    param.Type = listType.UnderlyingSystemType.ToString();
                }
                else
                {
                    param.Properties = GetParams(listType, currentLevel, maxLevel);
                }
            }
            else
            {
                param.Properties = GetParams(type, currentLevel, maxLevel);
            }
            return param;
        }

        public List<Param> GetParams(Type type, int currentLevel = 0, int maxLevel = 10)
        {
            List<Param> paramList = null;
            if (currentLevel < maxLevel)
            {
                currentLevel++;
                paramList = new List<Param>();
                foreach (var prop in type.GetProperties())
                {
                    paramList.Add(GetComplexParam(prop.Name, prop.PropertyType, currentLevel, maxLevel));
                }
            }
            return paramList;
        }

        public List<string> GetUrlParams(string url)
        {
            var regex = new Regex("{.*?}");
            var urlParams = new List<string>();
            var matches = regex.Matches(url);
            foreach (var match in matches)
            {
                urlParams.Add(match.ToString().Replace("{", "").Replace("}", ""));
            }
            return urlParams;
        }

        public string GetName(string url)
        {
            var name = url.Length < 1 ? url : String.Join("", url.Replace("{", "By").Replace("}", "").Split('/').Select(x => x.Length < 1 ? x : x.Substring(0, 1).ToUpper() + x.Substring(1)));
            return name; // .Substring(0, 1).ToLower() + name.Substring(1);
        }

        public List<Param> GetUriParams(List<Param> uriParams, ParameterInfo methodParameterInfo)
        {
            if (uriParams == null)
            {
                uriParams = new List<Param>();
            }
            uriParams.Add(GetComplexParam(methodParameterInfo.Name, methodParameterInfo.ParameterType));
            return uriParams;
        }

        public Tuple<ApiInfo, List<String>> GetApiInfo(Type type, string routePrefix, MethodInfo methodInfo)
        {
            ApiInfo apiInfo = null;

            List<string> errors = new List<string>();
            var methodAttributes = methodInfo.GetCustomAttributes().Where(attr =>
                attr.GetType() != typeof(System.Runtime.CompilerServices.AsyncStateMachineAttribute)
                && attr.GetType() != typeof(System.Diagnostics.DebuggerStepThroughAttribute)
                && attr.GetType() != typeof(System.Web.Http.Description.ApiExplorerSettingsAttribute));
            var controllerName = methodInfo.DeclaringType.Name.Replace("Controller", "");
            var routeAttr = methodAttributes.Where(attr => attr.GetType() == typeof(RouteAttribute)).SingleOrDefault();
            var url = (routePrefix + "/" + ((RouteAttribute)routeAttr).Template).Replace("API", "api").TrimEnd('/');
            var urlParams = GetUrlParams(url);
            apiInfo = new ApiInfo()
            {
                Name = GetName(url),
                FullName = type.UnderlyingSystemType.FullName + "." + methodInfo.Name,
                ControllerName = controllerName,
                Url = url
            };
            foreach (var methodAttr in methodAttributes.Where(attr => attr.GetType() != typeof(RouteAttribute)))
            {
                if (methodAttr.GetType().GetInterfaces().Contains(typeof(IActionHttpMethodProvider)))
                {
                    apiInfo.HttpVerb = methodAttr.GetType().UnderlyingSystemType.Name.ToUpper().Replace("HTTP", "").Replace("ATTRIBUTE", "");
                }
                else if (methodAttr.GetType().UnderlyingSystemType == typeof(System.Web.Http.Description.ResponseTypeAttribute))
                {
                    apiInfo.Response = GetComplexParam("response", ((System.Web.Http.Description.ResponseTypeAttribute)methodAttr).ResponseType);
                }
                else
                {
                    throw new Exception("Method Attribute not accounted for");
                }
            }
            var methodParameters = methodInfo.GetParameters();
            var bodyParamName = "";
            for (var i = 0; i < methodParameters.Count(); i++)
            {
                var methodParam = methodParameters[i];
                foreach (var paramAttribute in methodParam.GetCustomAttributes())
                {
                    if (paramAttribute.GetType() == typeof(FromBodyAttribute) && apiInfo.Body == null)
                    {
                        apiInfo.Body = GetComplexParam(methodParam.Name, methodParam.ParameterType);
                        bodyParamName = methodParam.Name;
                    }
                    else if (paramAttribute.GetType() == typeof(FromUriAttribute))
                    {
                        apiInfo.UriParams = GetUriParams(apiInfo.UriParams, methodParam);
                    }
                }
                // If all of this is the case, then it must be the body
                if (apiInfo.Body == null
                    && !urlParams.Select(x => x.ToLower()).Contains(methodParam.Name.ToLower())
                    && (apiInfo.HttpVerb == "POST" || apiInfo.HttpVerb == "PUT")
                    && methodParam.GetCustomAttributes().Where(param => param.GetType() == typeof(FromUriAttribute)).Count() == 0)
                {
                    bodyParamName = methodParam.Name;
                    apiInfo.Body = GetComplexParam(methodParam.Name, methodParam.ParameterType);
                }
            }

            foreach (var methodParam in methodParameters)
            {
                var bodyUriAttributes = methodParam.GetCustomAttributes().Where(paramAttribute => (paramAttribute.GetType() == typeof(FromBodyAttribute))
                    || (paramAttribute.GetType() == typeof(FromUriAttribute)));
                if (bodyUriAttributes.Count() == 0 && methodParam.Name != bodyParamName)
                {
                    if (urlParams.Select(x => x.ToLower()).Contains(methodParam.Name.ToLower()))
                    {
                        apiInfo.UrlParams = GetUriParams(apiInfo.UrlParams, methodParam);
                    }
                    else
                    {
                        apiInfo.UriParams = GetUriParams(apiInfo.UriParams, methodParam);
                    }
                }
            }

            if (((apiInfo.HttpVerb == "POST" || apiInfo.HttpVerb == "PUT") && apiInfo.Body == null) || ((apiInfo.HttpVerb != "POST" && apiInfo.HttpVerb != "PUT") && apiInfo.Body != null))
            {
                Console.WriteLine("WARNING: " + apiInfo.FullName + "(" + apiInfo.HttpVerb + ") - A POST should always have a body. A non-POST should never have a body.");
            }

            if (apiInfo.Response == null)
            {
                apiInfo.Response = GetComplexParam("response", methodInfo.ReturnType);
            }

            if (urlParams.Count() > 0)
            {
                // HACK: Checks for missing URL Params caused by being set at the base route. Adds them as strings.
                if (apiInfo.UrlParams == null)
                {
                    errors.Add("ERROR: Missing URL Params - " + apiInfo.FullName);
                    apiInfo.UrlParams = new List<Param>();
                }
                if (apiInfo.UrlParams.Count() != urlParams.Count())
                {
                    errors.Add("ERROR: Missing URL Params - " + apiInfo.FullName);
                }
                // HACK
                foreach (var urlParam in urlParams)
                {
                    if (!apiInfo.UrlParams.Select(x => x.Name.ToLower()).Contains(urlParam.ToLower()))
                    {
                        apiInfo.UrlParams.Add(new Param(urlParam, "String"));
                    }
                }
            }
            return new Tuple<ApiInfo, List<string>>(apiInfo, errors);
        }

        public Tuple<List<ApiInfo>, List<string>> GetApiInfoList(Type type)
        {
            var apiInfoList = new List<ApiInfo>();
            var errors = new List<string>();
            var methods = type.GetMethods().Where(m => m.DeclaringType.Name == type.Name);
            var routePrefix = GetRoutePrefix(type);
            foreach (var method in methods)
            {
                if (method.ReturnType.UnderlyingSystemType.FullName != "System.Web.Mvc.ActionResult" && type.Name != "HelpController")
                {
                    var api = GetApiInfo(type, routePrefix, method);
                    var apiInfo = api.Item1;
                    errors.AddRange(api.Item2);
                    if (apiInfo != null)
                    {
                        if (apiInfo.Name != null)
                        {
                            apiInfoList.Add(apiInfo);
                        }
                    }
                }
                else
                {
                    errors.Add("WARNING: Skipping " + type.Name + "-" + method.Name);
                }
            }
            return new Tuple<List<ApiInfo>, List<string>>(apiInfoList, errors);
        }

        public Tuple<List<ApiInfoBase>, List<string>> GetApiInfoList(string[] dlls)
        {
            var apiInfoBaseList = new List<ApiInfoBase>();
            var errors = new List<string>();
            for (var i = 0; i < dlls.Length; i++)
            {
                var dllName = dlls[i].Split('\\').Last().Replace("GamingGrids.Api.", "").Replace(".v2.dll", "").Replace(".v1.dll", "");
                var apiInfoBase = new ApiInfoBase()
                {
                    Name = dllName.Substring(0, 1).ToLower() + dllName.Substring(1)
                };
                var types = GetTypes(dlls[i]);
                for (var x = 0; x < types.Count; x++)
                {
                    var list = GetApiInfoList(types[x]);
                    errors.AddRange(list.Item2);
                    apiInfoBase.Apis.AddRange(list.Item1);
                }
                if (apiInfoBase.Apis.Count() != 0)
                {
                    apiInfoBaseList.Add(apiInfoBase);
                }
            }
            return new Tuple<List<ApiInfoBase>, List<string>>(apiInfoBaseList, errors);
        }

        public static string[] GetApiDlls(string dllDirectory, string dllContains)
        {
            var dlls = Directory.GetFiles(dllDirectory, "*.dll", SearchOption.AllDirectories);
            return dlls.Where(dll => dll.Contains("bin") && Path.GetFileName(dll).Contains(dllContains)).ToArray();
        }

        public APIHelper(string dllDirectory, string dllContains)
        {
            if (Directory.Exists(dllDirectory))
            {
                var projectDirectory = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.FullName;
                if (Directory.Exists(Path.Combine(projectDirectory, "api")))
                {
                    Array.ForEach(Directory.GetFiles(Path.Combine(projectDirectory, "api")), File.Delete);
                }
                if (Directory.Exists(Path.Combine(projectDirectory, "graphql")))
                {
                    Array.ForEach(Directory.GetFiles(Path.Combine(projectDirectory, "graphql")), File.Delete);
                }
                if (Directory.Exists(Path.Combine(projectDirectory, "json")))
                {
                    Array.ForEach(Directory.GetFiles(Path.Combine(projectDirectory, "json")), File.Delete);
                }
                Directory.CreateDirectory(Path.Combine(projectDirectory, "json"));
                Directory.CreateDirectory(Path.Combine(projectDirectory, "graphql"));
                Directory.CreateDirectory(Path.Combine(projectDirectory, "json"));
                var dlls = GetApiDlls(dllDirectory, dllContains);
                var apiInfoListInfo = GetApiInfoList(dlls);
                var apiInfoList = apiInfoListInfo.Item1;
                var errors = apiInfoListInfo.Item2;
                var apiCount = 0;
                foreach (var apiInfo in apiInfoList)
                {
                    var apiInfoGrouped = apiInfo.Apis.GroupBy(a => a.ControllerName)
                        .Select(g => new
                        {
                            Key = g.Key,
                            Apis = g.Select(x => x).ToList()
                        });
                    apiCount += apiInfo.Apis.Count();
                    foreach (var api in apiInfoGrouped)
                    {
                        var json = JsonConvert.SerializeObject(api.Apis, Formatting.Indented, new JsonSerializerSettings
                        {
                            ContractResolver = new CamelCasePropertyNamesContractResolver(),
                            NullValueHandling = NullValueHandling.Ignore
                        });
                        var path = Path.Combine(projectDirectory, "json", apiInfo.Name + "-" + api.Key + ".json");
                        using (StreamWriter sw = File.CreateText(path))
                        {
                            sw.Write(json);
                        }
                        Console.WriteLine(apiInfo.Name.Substring(0, 1).ToUpper() + apiInfo.Name.Substring(1) + "/" + api.Key.Substring(0, 1).ToUpper() + api.Key.Substring(1) + " API Methods: " + api.Apis.Count());
                    }
                    Console.WriteLine(apiInfo.Name.Substring(0, 1).ToUpper() + apiInfo.Name.Substring(1) + " API Methods: " + apiInfo.Apis.Count());
                    Console.WriteLine("-----------------------------------------");
                }
                Console.WriteLine("Total APIs: " + apiInfoList.Count());
                Console.WriteLine("Total API Methods: " + apiCount);

                if (errors.Count() > 0)
                {
                    Console.WriteLine();
                    Console.WriteLine("ERRORS / WARNINGS");
                    Console.WriteLine("-----------------------------------------");
                    foreach (var error in errors.OrderBy(x => x))
                    {
                        Console.WriteLine(error);
                    }
                    Console.WriteLine("-----------------------------------------");
                }
                try
                {
                    var processStartInfo = new ProcessStartInfo
                    {
                        FileName = "cmd",
                        RedirectStandardInput = true,
                        WorkingDirectory = projectDirectory,
                        UseShellExecute = false
                    };
                    var process = Process.Start(processStartInfo);
                    process.StandardInput.WriteLine("npm run start & exit");
                    process.WaitForExit();
                    Console.WriteLine("Complete!");
                    Console.ReadLine();
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: NodeJS required. " + ex.ToString());
                    Console.Read();
                }
            }
            else
            {
                Console.WriteLine("Error: " + dllDirectory + " directory does not exist.");
                Console.Read();
            }
        }
    }
}
