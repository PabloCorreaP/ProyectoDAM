using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_setAc : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
        public GameObject otherGameObject;
    void Update()
    {
        
        if (Input.GetKeyDown(KeyCode.D))
        {
            otherGameObject.SetActive(false);
        }

        if (Input.GetKeyDown(KeyCode.E))
        {
            otherGameObject.SetActive(true);
        }

        if (Input.GetKeyDown(KeyCode.M))
        {
            enabled = false;
        }
    }
}
