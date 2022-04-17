using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenwebinarsCprin
{
    struct ShelvePosition
    {
       public ShelvePosition(int row, int column)
        {
            Row = row;
            Column = column;
        }

        public int Row { set; get; }

        public int Column { set; get; }
    }
}
