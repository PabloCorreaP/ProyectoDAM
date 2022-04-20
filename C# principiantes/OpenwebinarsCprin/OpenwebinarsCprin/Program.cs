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

            //PLayList<Song> pLayListSongs= new PLayList<Song>();
            //pLayListSongs.Add(song);
            //pLayListSongs.Add(song2);

            WritteLineSpecial<Song>(song, "Star with ", "enjoy");

            ListExplanation();
            SteckExplanation();
            QueueExplanation();
            DictionaryExplanation();
            Console.ReadKey();
        }

        private static void DictionaryExplanation()
        {
            Dictionary <string,Client> clients = new Dictionary<string,Client>();
            clients.Add("000000D", new Client() { Name = "Jose Manuel" });
            
           if( !clients.ContainsKey("000000D")) clients.Add("000000D", new Client() { Name = "Jose Manuel" }); ;

            clients["000000D"]=new Client();

            Client miCleiente = clients["000000D"];
            //clients.TryGetValue("000000D");
            foreach (KeyValuePair<string,Client> keyValue in clients)
            {

            }

            var elements = new List<KeyValuePair<string,Client>>();
            elements.Add(new KeyValuePair<string, Client>("001",new Client()));
            elements.Add(new KeyValuePair<string, Client>("002",new Client()));

            //Utilis.AddRangeDictionary(clients, elements);

            clients.AddRange(elements);
        }

        private static void QueueExplanation()
        {
            Queue<int> queueNumbers = new Queue<int>();
            queueNumbers.Enqueue(1);
            queueNumbers.Dequeue();
        }

        private static void SteckExplanation()
        {
            Stack<Song> salesSong = new Stack<Song>();
            salesSong.Push(new Song());
            Song song = salesSong.Pop();
        }

        private static void ListExplanation()
        {
            List<int> numbers = new List<int>();
            numbers.Add(0);
            //numbers.Count;
        }

        static void WritteLineSpecial<T>(T data, string prefi, string sufi) where T : new()
        {
            T myNewType = new T();
            Console.WriteLine($"{prefi} {data} {sufi}");
        }
    }
}
