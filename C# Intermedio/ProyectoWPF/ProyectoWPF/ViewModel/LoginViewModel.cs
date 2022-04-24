using ProyectoWPF.ViewModel.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProyectoWPF.ViewModel
{
    class LoginViewModel: BaseViewModel
    {
        private string username;
        private string password;
        public string Username
        {
            get => username;
            set
            {
                username = value;
                RaiseProperty();
            }
        }

        public string Password { get; set; }
    }
}
