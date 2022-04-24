using ProyectoWPF.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProyectoWPF.Services
{
    interface ILoginService
    {

        UserData DoLogin(string UserName, string password);
    }
}
