using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CIntermedio
{
    class Car
    {
        public string Nombre { get; set; }
        public string Maker { get; set; }

        public override string ToString()
        {
            return $"{Nombre} {Maker}";
        }
    }

  
    
}
