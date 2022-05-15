using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coseno2 : TrigoBase
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.localPosition = new Vector3(
            0f,
            Mathf.Sin(Time.time*freq),0f)*amplitude;
    }
}
