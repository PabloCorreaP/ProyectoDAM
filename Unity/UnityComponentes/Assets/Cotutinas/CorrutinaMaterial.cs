using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CorrutinaMaterial : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.C))
        {
            StartCoroutine(ChangeColor());
        }
    }

    public Color targetColor = Color.red;
    public float timeToChange = 3f;
    IEnumerator ChangeColor()
    {
        Material mat = GetComponent<MeshRenderer>().material;
        Color initColor = mat.color;
        float time = 0f;
        while (time<timeToChange)
        {
            mat.color = Color.Lerp(initColor, targetColor, time/timeToChange);
            time += Time.deltaTime;
            yield return null;
        }
    }
}
