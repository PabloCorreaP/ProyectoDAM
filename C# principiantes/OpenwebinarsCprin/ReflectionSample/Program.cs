using System;
using System.Linq;
using System.Reflection;

namespace ReflectionSample
{
    class Program
    {
        static void Main(string[] args)
        {
            
        }

        static void doSomethingWithMyClass<T>() where T: new()
        {
            Activator.CreateInstance<T>();
        }
        static void SampleWithAttributes()
        {
            MySAmpleFromReflection sample = new MySAmpleFromReflection();
             MyAttribute attr=(MyAttribute)   sample.GetType().GetCustomAttributes().FirstOrDefault();
          PropertyInfo[] properties=  sample.GetType().GetProperties();
            properties[0].SetValue(attr, "Jose Manuel");
            properties[0].GetValue(attr);

             MethodInfo[] metInfo=  sample.GetType().GetMethods();
           MethodInfo doSomething= metInfo.FirstOrDefault(x => x.Name=="DoSomething");
            if (doSomething != null)
            {
                doSomething.Invoke(sample, null);
            }

            Assembly.GetExecutingAssembly();
        }
    }
}
