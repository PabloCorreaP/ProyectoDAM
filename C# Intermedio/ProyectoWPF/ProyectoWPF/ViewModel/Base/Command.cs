using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;

namespace ProyectoWPF.ViewModel.Base
{
    public class Command<T> : ICommand
    {
        public event EventHandler CanExecuteChanged;
        public Action<T> _execute;

        public Command(Action<T> execute)
        {
            _execute = execute;
        }
        public bool CanExecute(object parameter)
        {
            return true;
        }

        public void Execute(object parameter)
        {
            _execute?.Invoke((T)parameter);
        }
    }
    class Command : ICommand
    {

        public event EventHandler CanExecuteChanged;
        public Action _execute;

        public Command(Action execute)
        {
            _execute = execute;
        }

        public bool CanExecute(object parameter)
        {
            return true;
        }

        public void Execute(object parameter)
        {
            _execute.Invoke();
        }
    }
}
