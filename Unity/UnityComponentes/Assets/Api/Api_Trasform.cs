using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_Trasform : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    float speed = 5f;
    float angularSpeed = 90f;
    public Transform lookTarget;

    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal")*speed* Time.deltaTime;
        float z = Input.GetAxis("Vertical")*speed*Time.deltaTime;
        transform.Translate(x,0f,z,Space.World);
        //transform.Rotate(0f,angularSpeed*Time.deltaTime,0);
        transform.LookAt(lookTarget);
    }
}
