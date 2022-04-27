using ProyectoWPF.ViewModel;
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
using ReactiveUI;
using System.Reactive.Linq;

namespace ProyectoWPF.View
{
    /// <summary>
    /// Lógica de interacción para LoginView.xaml
    /// </summary>
    public partial class LoginView 
    {
        public LoginView()
        {
            InitializeComponent();
            this.WhenActivated((d) =>
            {
                d(this.Bind(ViewModel, vm => vm.Username, v => v.TextBoxUserName.Text));
                d(this.Bind(ViewModel, vm => vm.Password, v => v.TextBoxPassword.Text));
                d(this.BindCommand(ViewModel,vm=>vm.DoLoginCommand,v=>v.ButtonLogin));
            
            });

            this.WhenAnyValue(v=>v.ViewModel.Username,v=>v.ViewModel.Password)
                .Where(x=>!x.Equals(null)).Select(x=>x.Item1)
                .Subscribe(username=> {
                if (string.IsNullOrEmpty(username))
                {
                    TextBoxUserName.Background = new SolidColorBrush(Colors.Aquamarine);
                }
            }) ;

               var textEvent= Observable.FromEventPattern<TextChangedEventArgs>(TextBoxUserName,nameof(TextBoxUserName.PreviewTextInput));
        }
    }
}
