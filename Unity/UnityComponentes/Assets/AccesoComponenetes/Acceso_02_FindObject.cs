using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acceso_02_FindObject : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Enemy anyEnemy = FindObjectOfType<Enemy>();
        if (anyEnemy!=null)
        {
            print("Enemigo encontrado");
        }

        Enemy[] enemies = FindObjectsOfType<Enemy>();
        foreach (Enemy en in enemies)
        {
            print("Un enemigo: " + en.name);
        }
    
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
