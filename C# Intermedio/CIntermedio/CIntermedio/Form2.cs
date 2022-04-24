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
    public partial class Form2 : Form
    {
        private List<Car> cars = new List<Car> { };

        public Form2()
        {
            InitializeComponent();
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void Form2_Load(object sender, EventArgs e)
        {
            cars.Add(new Car() { Nombre = "Focus",Maker="Ford" });
            listBox1.Items.Add("Ford");
            listBox1.Items.Add("Red");

            listBox1.DataSource=cars;
            listBox1.DisplayMember = "Name";
            //dateTimePicker1.Value;
        }
    }
}
