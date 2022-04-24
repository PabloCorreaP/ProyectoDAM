using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace OpenwebinarsCprin
{
    class DowloadService
    {

        public byte[] Dowload(string songName)
        {

            Thread.Sleep(1000);
            return new byte[] { };
        }

        public Task<byte[]> DowloadAsync(string songName)
        {

            Thread.Sleep(1000);
            return Task.FromResult(new byte[] { });
        }
    }
}
