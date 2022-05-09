using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acces_03_GetComp : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Enemy enemy = GetComponent<Enemy>();
        if (enemy!=null)
        {
            print("enemy encontrado");
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
