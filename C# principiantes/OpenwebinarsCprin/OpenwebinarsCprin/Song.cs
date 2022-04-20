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
        public string Category { get; set; }

        public List<Artist> Artists { get; set; }

        public int Visists { get; set; }
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
