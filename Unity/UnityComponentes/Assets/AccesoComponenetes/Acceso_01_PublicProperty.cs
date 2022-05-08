using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acceso_01_PublicProperty : MonoBehaviour
{
    public Transform otherTransform;
    //public Transform[] otherTransforms;

    // Start is called before the first frame update
    void Start()
    {
        print("Tansform de " + transform.name);
        otherTransform.position = Vector3.zero;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
