using System.Collections.Generic;
using System.Net.Http;

namespace GamingGridsApiHelper
{
    public class ApiInfoBase
    {
        public string Name { get; set; }
        public List<ApiInfo> Apis { get; set; }
        public ApiInfoBase()
        {
            Apis = new List<ApiInfo>();
        }
    }

    public class ApiInfo
    {
        public string Name { get; set; }
        public string FullName { get; set; }
        public string ControllerName { get; set; }
        public string Url { get; set; }
        public string HttpVerb { get; set; }
        public List<Param> UrlParams { get; set; }
        public Param Body { get; set; }
        public List<Param> UriParams { get; set; }
        public Param Response { get; set; }
        public ApiInfo()
        {
        }
    }

    public class HttpVerbs
    {
        public bool Get { get; set; }
        public bool Post { get; set; }
        public bool Put { get; set; }
        public bool Delete { get; set; }
    }

    public class Param
    {
        private string _type;
        public string Name { get; set; }
        public bool IsList { get; set; }
        public string Type
        {
            get
            {
                return _type;
            }
            set
            {
                _type = value == null ? null : value.Replace("System.", "")
                    .Replace("Int32", "Number")
                    .Replace("Int64", "Number")
                    .Replace("Decimal", "Number")
                    .Replace("Char", "")
                    .Replace("Nullable`1[", "")
                    .Replace("[", "")
                    .Replace("]", "");
            }
        }
        public List<Param> Properties { get; set; }
        public Param(string name, string type = null)
        {
            Name = name; // .Substring(0, 1).ToLower() + name.Substring(1);
            Type = type;
        }
    }
}