using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenwebinarsCprin
{

    class PlayList<T, V, Z>
    {

    }
    class PLayList<T>
    {
        ArrayList list = new ArrayList();

        public void Add(T media) 
        { 
        

        }

        public void PlayAll()
        {
            foreach(T media in mediaList)
            {
                Console.WriteLine(media);
            }
        }
    }
}
