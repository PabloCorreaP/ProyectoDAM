using System;
using System.Collections.Generic;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpfAppOpenWeb
{
    /// <summary>
    /// Lógica de interacción para AnimacionesWindow.xaml
    /// </summary>
    public partial class AnimacionesWindow : Window
    {
        public AnimacionesWindow()
        {
            InitializeComponent();
        }

        private void ButtonAnimation_Click(object sender, RoutedEventArgs e)
        {
            DoubleAnimation dobAnim = new DoubleAnimation();
            dobAnim.From = 1;
            dobAnim.To = 0;
            ButtonAnimation.BeginAnimation(Button.OpacityProperty,dobAnim);
        }
    }
}
