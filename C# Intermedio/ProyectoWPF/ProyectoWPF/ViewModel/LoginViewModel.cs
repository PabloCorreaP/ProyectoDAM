using ProyectoWPF.Services;
using ProyectoWPF.ViewModel.Base;
using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using ReactiveUI.Wpf;
using ReactiveUI;
using System.Threading.Tasks;
using System.Reactive;

namespace ProyectoWPF.ViewModel
{
    class LoginViewModel: BaseViewModel
    {
        private string username;
        private string password;

        private ReactiveCommand<Unit,Unit> loginCommand;
        private readonly ILoginService loginService;

       

        public ReactiveCommand<Unit,Unit> DoLoginCommand() =>loginCommand;
        public LoginViewModel()
        {
            loginCommand = ReactiveCommand.CreateFromTask<Unit,Unit>(PerformDoLoginAsync);
            loginService = CustomDependecyService.Get<LoginService>();
        }

        private Task<Unit> PerformDoLoginAsync(Unit arg)
        {
            CustomDependecyService.Get<LoginService>().DoLogin(username, password);
            return Task.FromResult(Unit.Default);
        }

       

        

        public string Username
        {
            get => username;
            set
            {
                this.RaiseAndSetIfChanged(ref username, value);
            }
        }

        public string Password 
        { 
            get=>password;
            set
            {
                password = value;
                this.RaiseAndSetIfChanged(ref password, value);
            }
        }


    }
}
