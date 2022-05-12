using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_Destroy : MonoBehaviour
{
    public GameObject objectToDestroy;
    public Rigidbody body;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //Ej 1
        if (Input.GetKeyDown(KeyCode.D))
        {
            Destroy(objectToDestroy);
        }

        //Ej 2
        if (Input.GetKeyDown(KeyCode.M))
        {
            Destroy(gameObject);
        }
        //Ej 3
        if (Input.GetKeyDown(KeyCode.R))
        {
            Destroy(body);
        }

        //Ej 4
        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            Destroy(objectToDestroy, 5f);
        }
    }
}
