using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LerpPositionBase : MonoBehaviour
{
    public float range = 1f;

    public Vector3 p1;
    public Vector3 p2;
    Vector3 initialPosition;

    public float speed = 1f;
    protected float t = 0f;
    Vector3 Interpolate()
    {
        return p1 + (p2-p1) * TFunc();
    }

    protected virtual float  TFunc()
    {
        return t;
    }

    // Start is called before the first frame update
    void Start()
    {
        initialPosition = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        p1 = initialPosition + Vector3.left * range;
        p2 = initialPosition + Vector3.right * range;
        if (Input.GetKeyDown(KeyCode.R))
        {
            t = 0f;
        }
        transform.position = Interpolate();
        t += (Time.deltaTime*speed);

        if (t > 1f)
        {
            t = 0f;
        }
    }

    private void OnDrawGizmos()
    {
        Gizmos.color = Color.blue;
        Gizmos.DrawLine(p1, p2);
    }
}
