using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coseno : MonoBehaviour
{
    [Range(0f, Mathf.PI * 2f)]
    public float angle = 0f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.localPosition = new Vector3(Mathf.Cos(angle),0f,0f);
    }
}
