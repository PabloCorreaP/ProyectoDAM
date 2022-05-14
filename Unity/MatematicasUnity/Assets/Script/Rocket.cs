using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Rocket : MonoBehaviour
{
    public float propulsionForce = 20f;
    public float rotationSpeed = 90f;
    [Header("Collision Settings")]
    public float maxCollisionSpeed = 3f;
    public float maxCollisionDot = .8f;



    // Start is called before the first frame update
    void Start()
    {
        //body = GetComponent<Rigidbody2D>();   
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
