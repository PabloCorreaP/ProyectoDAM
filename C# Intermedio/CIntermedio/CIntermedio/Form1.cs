﻿using System;
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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //MessageBox.Show("Hello");
            label1.Text = textBox1.Text;
        
        }

        private void button1_MouseEnter(object sender, EventArgs e)
        {
            button1.BackColor = Color.Azure;
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyData == Keys.D0)
            {
                label1.Text = "Valor Incorrecto";
                e.SuppressKeyPress = true;
            }
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            //pictureBox1.Image = Image.FromFile();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            new Form2().Show();
        }
    }
}
