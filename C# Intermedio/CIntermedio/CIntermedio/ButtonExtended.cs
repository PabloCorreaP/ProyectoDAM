using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CIntermedio
{
    class ButtonExtended: Button
    {
        public ButtonExtended()
        {
            this.MouseEnter += MouseEnterButton;
        }

        private void MouseEnterButton(object sender, EventArgs e)
        {
            this.BackColor = Color.Red;
        }

        protected override void Dispose(bool disposing)
        {
            this.MouseEnter -= MouseEnterButton;

            base.Dispose(disposing);
        }
    }


}
