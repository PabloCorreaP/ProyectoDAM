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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfAppOpenWeb
{
    /// <summary>
    /// Lógica de interacción para UserControlLabBut.xaml
    /// </summary>
    public partial class UserControlLabBut : UserControl
    {
        public static DependencyProperty LabelTextProperty=
          DependencyProperty.Register(nameof(LabelText),typeof(string),typeof(UserControlLabBut),
              new PropertyMetadata(LabelTextPropertyChanged));

        

        public UserControlLabBut()
        {
            InitializeComponent();
        }

        public string LabelText
        {
            get => (string)GetValue(LabelTextProperty);
            set => SetValue(LabelTextProperty,value);
        }

        private static void LabelTextPropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            var userControlPath = (UserControlLabBut)d;
            userControlPath.LabelPath.Content=e.NewValue.ToString();
            
        }
    }
}
