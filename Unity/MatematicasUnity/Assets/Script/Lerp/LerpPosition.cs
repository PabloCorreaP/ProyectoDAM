using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LerpPosition : MonoBehaviour
{
    public Transform p1;
    public Transform p2;

    public float speed = 1f;
    private float t = 0f;
    Vector3 Lerp(Vector3 a, Vector3 b,float t)
    {
        return a + (b - a) * t;
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            t = 0f;
        }
        transform.position = Lerp(p1.position, p2.position, t);
        t += (Time.deltaTime*speed);

        if (t > 1f)
        {
            t = 0f;
        }
    }
}
