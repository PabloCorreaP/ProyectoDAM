using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Magnitud : MonoBehaviour
{

    Vector2 testVec;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.M))
        {

            Debug.Log("Mag: "+Magni(testVec));
            Debug.Log("Normalizado: " + Normalizar(testVec));


        }
    }
    private Vector2 Normalizar(Vector2 v)
    {
        return v / Magni(v);
    }

    private float Magni(Vector2 v)
    {
        return Mathf.Sqrt(v.x * v.x + v.y * v.y);
    }
}
