using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text;

namespace ProyectoWPF.ViewModel.Base
{
    abstract class BaseViewModel : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;
        public void RaiseProperty([CallerMemberName]string propertyName = "")
        {
            
          PropertyChanged?.Invoke(this,new PropertyChangedEventArgs(propertyName));
            
        }

    }
}
