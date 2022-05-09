using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acces_04_GetCompInChil : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Enemy enemy = GetComponentInChildren<Enemy>();
        if (enemy!=null)
        {
            print("enemy children encontrado");
        }


        Enemy[] enemies = GetComponentsInChildren<Enemy>();
        foreach (Enemy en in enemies)
        {
            print("Un enemigo hijo: " + en.name);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
