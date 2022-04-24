using System;
using System.Collections.Generic;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpfAppOpenWeb
{
    /// <summary>
    /// Lógica de interacción para AdvanceControls.xaml
    /// </summary>
    public partial class AdvanceControls : Window
    {
        private List<Car> cars = new List<Car>();
        public AdvanceControls()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            SampleList.ItemsSource = cars;
        }
    }
}
