using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
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

        public Param GetComplexNewParam(string name, Type type, int currentLevel = 0, int maxLevel = 5)
        {
            var complexNewParam = new Param(name);
            if (type.IsPrimitive || type.Namespace == "System")
            {
                complexNewParam.Type = type.ToString();
            }
            else if(type.UnderlyingSystemType.Name == "HttpRequestMessage")
            {
                complexNewParam.Type = "String";
            }
            else
            {
                complexNewParam.Properties = GetParams(type, currentLevel, maxLevel);
            }
            return complexNewParam;
        }

        public List<Param> GetParams(Type type, int currentLevel = 0, int maxLevel = 5)
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

        public ApiInfo GetApiInfo(string routePrefix, MethodInfo methodInfo)
        {
            ApiInfo apiInfo = null;
            var attrs = methodInfo.GetCustomAttributes();
            if (attrs.Count() != 0)
            {
                var controllerName = methodInfo.DeclaringType.Name.Replace("Controller", "");
                apiInfo = new ApiInfo()
                {
                    ControllerName = controllerName.Substring(0, 1).ToLower() + controllerName.Substring(1)
                };
                foreach (var attr in attrs)
                {
                    if (attr.GetType() == typeof(RouteAttribute))
                    {
                        apiInfo.Url = (routePrefix + "/" + ((RouteAttribute)attr).Template).Replace("API", "api");
                        // var name = String.Join("", apiInfo.Url.Split('/')); // .Where(u => !u.Contains("{")));
                        var name = "";
                        try
                        {
                            name = apiInfo.Url.Length < 1 ? apiInfo.Url : String.Join("", apiInfo.Url.Replace("{", "By").Replace("}", "").Split('/').Select(x => x.Length < 1 ? x : x.Substring(0, 1).ToUpper() + x.Substring(1)));
                        }
                        catch(Exception ex)
                        {
                            System.Diagnostics.Debug.WriteLine(ex.ToString());
                        }
                        apiInfo.Name = name.Substring(0, 1).ToLower() + name.Substring(1);
                    }
                    else if (attr.GetType().GetInterfaces().Contains(typeof(IActionHttpMethodProvider)))
                    {
                        if (attr.GetType() == typeof(HttpGetAttribute))
                        {
                            apiInfo.Method = "GET";
                        }
                        else if (attr.GetType() == typeof(HttpPutAttribute))
                        {
                            apiInfo.Method = "PUT";
                        }
                        else if (attr.GetType() == typeof(HttpPostAttribute))
                        {
                            apiInfo.Method = "POST";
                        }
                        else if (attr.GetType() == typeof(HttpDeleteAttribute))
                        {
                            apiInfo.Method = "DELETE";
                        }
                        else
                        {
                            System.Diagnostics.Debugger.Break();
                        }
                    }
                    else if(attr.GetType().UnderlyingSystemType == typeof(System.Web.Http.Description.ResponseTypeAttribute))
                    {
                        apiInfo.Response = GetParams(((System.Web.Http.Description.ResponseTypeAttribute)attr).ResponseType);
                    }
                    else
                    {
                        // TODO
                        System.Diagnostics.Debugger.Break();
                    }
                }
                foreach (var param in methodInfo.GetParameters())
                {
                    var paramAttributes = param.GetCustomAttributes();
                    if (paramAttributes.Count() == 0)
                    {
                        if (apiInfo.UrlParams == null)
                        {
                            apiInfo.UrlParams = new List<Param>();
                        }
                        apiInfo.UrlParams.Add(GetComplexNewParam(param.Name, param.ParameterType));
                    }
                    else
                    {
                        foreach (var paramAttribute in paramAttributes)
                        {
                            if (paramAttribute.GetType() == typeof(FromBodyAttribute))
                            {
                                apiInfo.Body = GetComplexNewParam(param.Name, param.ParameterType);
                            }
                            else if (paramAttribute.GetType() == typeof(FromUriAttribute))
                            {
                                apiInfo.UriParam = GetComplexNewParam(param.Name, param.ParameterType);
                            }
                            else if (paramAttribute.GetType().Name == "OptionalAttribute")
                            {
                                if (apiInfo.UrlParams == null)
                                {
                                    apiInfo.UrlParams = new List<Param>();
                                }
                                apiInfo.UrlParams.Add(GetComplexNewParam(param.Name, param.ParameterType));
                            }
                            else
                            {
                                System.Diagnostics.Debugger.Break();
                            }
                        }
                    }
                }

                if (apiInfo.Response.Count == 0)
                {
                    apiInfo.Response = GetParams(methodInfo.ReturnType);
                }
            }
            return apiInfo;
        }

        public List<ApiInfo> GetApiInfoList(Type type)
        {
            var apiInfoList = new List<ApiInfo>();
            var methods = type.GetMethods().Where(m => m.DeclaringType.Name == type.Name);
            var routePrefix = GetRoutePrefix(type);
            foreach (var method in methods)
            {
                var apiInfo = GetApiInfo(routePrefix, method);
                if (apiInfo != null)
                {
                    if (apiInfo.Name != null)
                    {
                        apiInfoList.Add(apiInfo);
                    }
                }
            }
            return apiInfoList;
        }

        public List<ApiInfoBase> GetApiInfoList(string[] dlls)
        {
            var apiInfoBaseList = new List<ApiInfoBase>();
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
                    apiInfoBase.Apis.AddRange(list);
                }
                if (apiInfoBase.Apis.Count() != 0)
                {
                    apiInfoBaseList.Add(apiInfoBase);
                }
            }
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
                if(Directory.Exists(Path.Combine(projectDirectory, "json")))
                {
                    Array.ForEach(Directory.GetFiles(Path.Combine(projectDirectory, "json")), File.Delete);
                }
                if(Directory.Exists(Path.Combine(projectDirectory, "api")))                
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
                catch(Exception ex)
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
