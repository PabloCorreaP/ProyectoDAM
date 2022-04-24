using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CIntermedio
{
    public partial class CustomControl : UserControl
    {
        public string LabelTitle
        {
            get => label1.Text;
            set => label1.Text = value;
        }

        public CustomControl()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
           DialogResult dr= openFileDialog1.ShowDialog();
            if (dr==DialogResult.OK)
            {
                textBox1.Text = openFileDialog1.FileName;
            }
        }

        private void backgroundWorker1_DoWork(object sender, DoWorkEventArgs e)
        {

        }
    }
}
