using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
namespace OpenwebinarsCprin
{

    class PlayList<T, V, Z>
    {

    }
    class PLayList<T> where T: Song
    {

        ArrayList list = new ArrayList();
        List<T> mediaList = new List<T>() { };


        public void Add(T media)
        {
            list.Add(media);

        }

        public void PlayAll()
        {
            foreach (T md in list)
            {
                Console.WriteLine(md);
            }


        }

        public void Preview()
        {
            if (list.Count > 0)
            {
                Song media = (Song)list[0];

            }
        }

        public List<T> Search(string category)
        {
            List<T> canciones = new List<T>();

            mediaList.Where(song=> song.Category==category);
            //foreach (Song song in mediaList)
            //{

            //    if (category == song.Category)
            //    {
            //        canciones.Add(song);
            //    }
            //}

            return canciones;
        }

        public List<T> Search2(string title)
        {
            List<T> canciones = new List<T>();

            foreach (T song in mediaList)
            {

                if (song.Title.Contains(title))
                {
                    canciones.Add(song);
                }
            }

            return canciones;
        }


        public List<string> TitulosCan(string title)
        {
            List<String> canciones = new List<String>();
            mediaList.Select(x => x.Title);

            var songs = mediaList.Where(x => x.Title.Contains(title));
            //foreach (Song song in mediaList)
            //{

              
            //        canciones.Add(song.Title);
                
            //}

            return (List<String>) songs;
        }

        public List<string> nombreArtistas()
        {
            var names = mediaList.SelectMany(x => x.Artists).Select(x=>x.Name);

            return names.ToList();
        }

        public bool HaveATitle(string title)
        {
           return mediaList.Any(z=>z.Title==title);

            
        }

        public Song GetDurationLess1MIn(string title)
        {
            return mediaList.FirstOrDefault(x=>x.Seconds/60<60);
          

        }

        public Song GetDurationLEss1MInLast(string title)
        {
            return mediaList.LastOrDefault(x => x.Seconds / 60 < 60);


        }


        public List<T> Top10()
        {
            return mediaList.Take(10).OrderBy(z=>z.Visists).ToList();

            
        }
        public Song[] Bottom10()
        {
            return mediaList.OrderByDescending(z=>z.Visists).Take(10).OrderBy(z => z.Visists).ToArray();


        }
        public void GropFromCategory()
        {
           mediaList.GroupBy(z=>z.Category).ToDictionary(x=>x.Key);


        }

        public List<T> Skip10Top20()
        {
          
            return mediaList.Skip(10).Take(10).ToList();


        }

        public List<Media> ConvertToMEdia()
        {
            return mediaList.OfType<Media>().ToList();


        }
    }
}
