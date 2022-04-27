using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace TrabajoConDatos
{
    static class  SystemIoSample
    {


        public static void SampleFile()
        {
            File.Exists("C:\\MyDirectory\\MyFile.txt");

        }

        public static void SampleDirectory()
        {
            Directory.Move("C:\\MyDirectory", "D:\\");

        }

        public static void FileInfoDirectorySample()
        {
            FileInfo info = new FileInfo("C:\\MyDirectory\\MyFile.txt");
            DirectoryInfo dirinfo = new DirectoryInfo("C:\\MyDirectory");

        }

        public static void WorkingWithFiles()
        {
            //StreamReader sr = new StreamReader("C:\\MyDirectory\\MyFile.txt");
          
            //StreamWriter sw = new StreamWriter("C:\\MyDirectory\\MyFile.txt");

            FileStream fileStream = new FileStream("C:\\MyDirectory\\MyFile.txt",FileMode.Create);
            fileStream.Seek(0, SeekOrigin.Begin);
            fileStream.Close();


        
        
        }
    }
}
