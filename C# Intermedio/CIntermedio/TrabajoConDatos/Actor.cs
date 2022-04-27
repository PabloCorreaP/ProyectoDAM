using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace TrabajoConDatos
{
    class Actor
    {

        public string Name { get; set; }

        public bool Theatre { get; set; }

        [JsonIgnore]
        public int Age { get; set; }

        public Actor(string name, bool theatre, int age)
        {
            Name = name;
            Theatre = theatre;
            Age = age;
        }
    }
}
