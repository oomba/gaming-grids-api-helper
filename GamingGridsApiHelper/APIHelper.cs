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

        public Param GetComplexNewParam(string name, Type type, int currentLevel = 0, int maxLevel = 10)
        {
            var complexNewParam = new Param(name);
            if (type.IsPrimitive || type.Namespace == "System")
            {
                complexNewParam.Type = type.ToString();
            }
            // TODO
            else if (type.UnderlyingSystemType.Name == "HttpRequestMessage")
            {
                complexNewParam.Type = "String";
            }
            else if(type == typeof(System.Web.Http.IHttpActionResult))
            {
                complexNewParam.Type = "String";
            }
            else if(type == typeof(System.Net.HttpStatusCode))
            {
                complexNewParam.Type = "Number";
            }
            else if (type.UnderlyingSystemType.GetInterface("IEnumerable") != null)
            {
                complexNewParam.IsList = true;
                complexNewParam.Properties = GetParams(type, currentLevel, maxLevel);
            }
            else
            {
                complexNewParam.Properties = GetParams(type, currentLevel, maxLevel);
            }
            return complexNewParam;
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
                    paramList.Add(GetComplexNewParam(prop.Name, prop.PropertyType, currentLevel, maxLevel));
                }
            }
            return paramList;
        }

        public Tuple<ApiInfo, List<String>> GetApiInfo(string routePrefix, MethodInfo methodInfo)
        {
            ApiInfo apiInfo = null;
            List<string> invalidPaths = new List<string>();
            var attrs = methodInfo.GetCustomAttributes();            
            if (attrs.Count() != 0)
            {
                var controllerName = methodInfo.DeclaringType.Name.Replace("Controller", "");               

                apiInfo = new ApiInfo()
                {
                    ControllerName = controllerName.Substring(0, 1).ToLower() + controllerName.Substring(1),
                    MethodName = methodInfo.Name
                };

                var routeAttr = attrs.Where(attr => attr.GetType() == typeof(RouteAttribute)).Single();
                apiInfo.Url = (routePrefix + "/" + ((RouteAttribute)routeAttr).Template).Replace("API", "api");
                var name = apiInfo.Url.Length < 1 ? apiInfo.Url : String.Join("", apiInfo.Url.Replace("{", "By").Replace("}", "").Split('/').Select(x => x.Length < 1 ? x : x.Substring(0, 1).ToUpper() + x.Substring(1)));
                apiInfo.Name = name.Substring(0, 1).ToLower() + name.Substring(1);


                var regex = new Regex("{.*?}");
                var urlParams = new List<string>();
                var matches = regex.Matches(apiInfo.Url);
                foreach(var match in matches)
                {
                    urlParams.Add(match.ToString().Replace("{", "").Replace("}", ""));
                }
                foreach (var attr in attrs)
                {
                    if (attr.GetType() == typeof(RouteAttribute))
                    {
                       // Handled above
                    }
                    else if (attr.GetType().GetInterfaces().Contains(typeof(IActionHttpMethodProvider)))
                    {
                        apiInfo.Method = attr.GetType().UnderlyingSystemType.Name.ToUpper().Replace("HTTP", "").Replace("ATTRIBUTE", "");
                    }
                    else if (attr.GetType().UnderlyingSystemType == typeof(System.Web.Http.Description.ResponseTypeAttribute))
                    {
                        apiInfo.Response = GetComplexNewParam("response", ((System.Web.Http.Description.ResponseTypeAttribute)attr).ResponseType);
                    }
                    else if (attr.GetType() == typeof(System.Runtime.CompilerServices.AsyncStateMachineAttribute) 
                        || attr.GetType() == typeof(System.Diagnostics.DebuggerStepThroughAttribute) 
                        || attr.GetType() == typeof(System.Web.Http.Description.ApiExplorerSettingsAttribute))
                    {
                        // We don't care about these types...
                    }
                    else
                    {
                        throw new Exception("Method Attribute not accounted for");
                    }
                }
                foreach (var param in methodInfo.GetParameters())
                {
                    var paramAttributes = param.GetCustomAttributes();
                    if (paramAttributes.Count() == 0)
                    {
                        // HACK: FromBody attribute is optional, so we have to use some ugly logic here
                        // methodInfo.GetParameters().Count() == 1 && 
                        if (apiInfo.Method == "POST" && !urlParams.Contains(param.Name)) //  !apiInfo.Url.Contains("{"))
                        {
                            apiInfo.Body = GetComplexNewParam(param.Name, param.ParameterType);
                        }
                        else
                        {
                            if (apiInfo.UrlParam == null)
                            {
                                apiInfo.UrlParam = new Param("UrlParam")
                                {
                                    Properties = new List<Param>()
                                };
                            }
                            apiInfo.UrlParam.Properties.Add(GetComplexNewParam(param.Name, param.ParameterType));
                        }
                    }
                    else
                    {
                        foreach (var paramAttribute in paramAttributes)
                        {
                            if (paramAttribute.GetType() == typeof(FromBodyAttribute) && apiInfo.Body == null)
                            {
                                apiInfo.Body = GetComplexNewParam(param.Name, param.ParameterType);
                            }
                            else if (paramAttribute.GetType() == typeof(FromUriAttribute))
                            {
                                apiInfo.UriParam = GetComplexNewParam(param.Name, param.ParameterType);
                            }
                            else if(apiInfo.Method == "POST" && !urlParams.Contains(param.Name))
                            {
                                apiInfo.Body = GetComplexNewParam(param.Name, param.ParameterType);
                            }
                            else if (paramAttribute.GetType().Name == "OptionalAttribute")
                            {
                                if (apiInfo.UrlParam == null)
                                {
                                    apiInfo.UrlParam = new Param("UrlParam")
                                    {
                                        Properties = new List<Param>()
                                    };
                                }
                                apiInfo.UrlParam.Properties.Add(GetComplexNewParam(param.Name, param.ParameterType));
                            }
                            else
                            {
                                throw new Exception("Parameter Attribute not accounted for");
                            }
                        }
                    }
                }

                if (apiInfo.Response == null)
                {
                    apiInfo.Response = GetComplexNewParam("response", methodInfo.ReturnType);
                }

                var paramCountMatches = true;
                if(apiInfo.UrlParam != null)
                {
                    var urlParamProperties = apiInfo.UrlParam.Properties.Select(x => x.Name.ToLower()).ToList().OrderBy(x => x).ToList();
                    var urlParamsSorted = urlParams.Select(x => x.ToLower()).OrderBy(x => x.ToLower()).ToList();

                    if(!urlParamProperties.SequenceEqual(urlParamsSorted))
                    {

                    }

                    if (apiInfo.UrlParam.Properties.Count != urlParams.Count())
                    {
                        paramCountMatches = false;
                    }
                }
                else
                {
                    if(urlParams.Count() > 0)
                    {
                        paramCountMatches = false;
                    }
                }
                if(!paramCountMatches)
                {
                    invalidPaths.Add(apiInfo.Name + "-" + apiInfo.ControllerName + " - " + apiInfo.Url);
                }
            }
            return new Tuple<ApiInfo, List<string>>(apiInfo, invalidPaths);
        }

        public Tuple<List<ApiInfo>, List<string>> GetApiInfoList(Type type)
        {
            var apiInfoList = new List<ApiInfo>();
            var errors = new List<string>();
            var methods = type.GetMethods().Where(m => m.DeclaringType.Name == type.Name);
            var routePrefix = GetRoutePrefix(type);
            foreach (var method in methods)
            {
                var api = GetApiInfo(routePrefix, method);
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
            return new Tuple<List<ApiInfo>, List<string>>(apiInfoList, errors);
        }

        public List<ApiInfoBase> GetApiInfoList(string[] dlls)
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
                // HACK: Filter out HelpController as it isn't Web API. Need a better way to handle this.
                var types = GetTypes(dlls[i]).Where(type => type.Name != "HelpController").ToList();
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
            Console.WriteLine("ERRORS");
            Console.WriteLine("-----------------------------------------");
            foreach (var error in errors)
            {
                
                Console.WriteLine(error);
            }
            Console.WriteLine("-----------------------------------------");
            return apiInfoBaseList;
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
                if (Directory.Exists(Path.Combine(projectDirectory, "json")))
                {
                    Array.ForEach(Directory.GetFiles(Path.Combine(projectDirectory, "json")), File.Delete);
                }
                if (Directory.Exists(Path.Combine(projectDirectory, "api")))
                {
                    Array.ForEach(Directory.GetFiles(Path.Combine(projectDirectory, "api")), File.Delete);
                }
                Directory.CreateDirectory(Path.Combine(projectDirectory, "json"));
                Directory.CreateDirectory(Path.Combine(projectDirectory, "api"));
                var dlls = GetApiDlls(dllDirectory, dllContains);
                var apiInfoList = GetApiInfoList(dlls);
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
