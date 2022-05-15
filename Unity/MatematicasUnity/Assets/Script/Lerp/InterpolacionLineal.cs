using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InterpolacionLineal : MonoBehaviour
{
    public float a = 0f;
    public float b = 10f;
    [Range(0f, 1f)]
    public float t = 0f;

    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label(string.Format("Lerp({0},{1},{2})= {3}",a,b,t,Lerp(a,b,t)));
    }

    private object Lerp(float v1, float v2, float dt)
    {
        return v1 + (v2 - v1) * dt;
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
