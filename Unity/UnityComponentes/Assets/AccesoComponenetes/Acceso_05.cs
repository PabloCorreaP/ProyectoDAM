using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acceso_05 : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        EnemyController ec = GetComponentInParent<EnemyController>();
        if (ec!=null)
        {
            print("enemy controller encontrado");
        }

        EnemyController[] enemies = GetComponentsInParent<EnemyController>();
        foreach (EnemyController en in enemies)
        {
            print("Un enemy controller: " + en.name);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
