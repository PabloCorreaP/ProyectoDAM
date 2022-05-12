using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_Istanciado : MonoBehaviour
{
    public GameObject prefab;
    public Vector3 posIn;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //Ej 1
        if (Input.GetKeyDown(KeyCode.I))
        {
            Instantiate(prefab);
        }

        //Ej 2
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Instantiate(prefab, posIn, Quaternion.identity);
        }

        //Ej 3
        if (Input.GetMouseButtonDown(0))
        {
            Vector3 mousePos = Input.mousePosition;
            mousePos.z = 10f;
            Vector3 worlPos = Camera.main.ScreenToWorldPoint(mousePos);
            Instantiate(prefab,worlPos,Quaternion.identity);
        }
    }
}
