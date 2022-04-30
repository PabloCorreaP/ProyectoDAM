using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;

namespace TrabajoConDatos
{
    class WorkingSettings
    {

        public void ChangeColor(Color color )
        {
        
            Properties.Settings.Default.Color = color;
            Properties.Settings.Default.Save();
        }
    }
}
