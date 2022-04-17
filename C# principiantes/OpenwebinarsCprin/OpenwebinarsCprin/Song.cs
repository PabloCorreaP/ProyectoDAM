using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenwebinarsCprin
{
    class Song : Media
    {
        public long Seconds { get; set; }

        public ShelvePosition Position { set; get; }


        public override void Play()
        {
            Console.WriteLine("Increase volume");

            base.Play();
        }

        public override bool Equals(object obj)
        {
            var mediaObj = (Media)obj;

            if (mediaObj.Title == this.Title)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return $"Title: {Title} Duration:{Seconds}";
        }
    }
}
