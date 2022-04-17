using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenwebinarsCprin
{
    class Program
    {
        static void Main(string[] args)
        {

            Song song = new Song();
            song.Title = "Titulo de la cancion";
            song.Seconds = 300;
            song.Play();

            song.Position = new ShelvePosition(0, 0);

            Song song2 = new Song();
   
            song2.Title = "Titulo de la cancion";
            song2.Seconds = 300;
            song2.Position = new ShelvePosition(1,0);


            Console.WriteLine(song2.ToString());

            PLayList<Song> pLayListSongs= new PLayList<Song>();
            pLayListSongs.Add(song);
            pLayListSongs.Add(song2);

            WritteLineSpecial<Song>(song, "Star with ", "enjoy");



            Console.ReadKey();
        }

        static void WritteLineSpecial<T>(T data, string prefi, string sufi)
        {
            Console.WriteLine($"{prefi} {data} {sufi}");
        }
    }
}
