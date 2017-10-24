using System;
using System.IO;

namespace GamingGridsApiHelper
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            //Application.EnableVisualStyles();
            //Application.SetCompatibleTextRenderingDefault(false);
            //Application.Run(new Form1());
            try
            {
                var dllLocation = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.Parent.FullName, "Tournament Platform - Server");
                var filter = "GamingGrids.Api.";
                var apiHelper = new APIHelper(dllLocation, filter);
            }
            catch(Exception ex)
            {
                Console.WriteLine("Error: " + ex.ToString());
                Console.Read();
            }
        }
    }
}
