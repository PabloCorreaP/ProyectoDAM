using Newtonsoft.Json;
using System;

namespace TrabajoConDatos
{
    class Program
    {
        static void Main(string[] args)
        {
            Actor actor = new Actor("Fulanito", false, 20);

            string json=JsonConvert.SerializeObject(actor);


        }
    }
}
