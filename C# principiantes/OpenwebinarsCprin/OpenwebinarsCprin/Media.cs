using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenwebinarsCprin
{
    class Media
    {
        private int parentRate;
        public string Title { get; set; }

        public virtual void Play()
        {
            Console.WriteLine($"Se esta reproduciendo{Title}");
        }


        protected bool CheckAge(int age)
        {
            return (age >= parentRate);
        }

    }
}
