using System;

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
                var dllLocation = @"C:\Projects\Tournament Platform - Server";
                var filter = "GamingGrids.Api.";
                new APIHelper(dllLocation, filter);
            }
            catch(Exception ex)
            {
                Console.WriteLine("Error: " + ex.ToString());
                Console.Read();
            }
        }
    }
}
