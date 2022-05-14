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
    Rigidbody2D body;
    // Start is called before the first frame update
    void Start()
    {
        body = GetComponent<Rigidbody2D>();
    }

    private void FixedUpdate()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            body.AddRelativeForce(Vector2.up*propulsionForce,ForceMode2D.Force);
        }
        float rotation = Input.GetAxis("Horizontal")*rotationSpeed*Time.deltaTime;
        body.MoveRotation(body.rotation + rotation);
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        Debug.Log("Colision"+collision);
        if (collision.relativeVelocity.sqrMagnitude>maxCollisionSpeed*maxCollisionSpeed)
        {
            Debug.Log("Fin del juego");
        }
        float dot = Vector2.Dot(transform.up, Vector2.up);
        if (dot < maxCollisionDot)
        {
            Debug.Log("Cohete demasiado inclinado");
        }
    }

    void Update()
    {
        
    }
}
