using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Seno2 : TrigoBase
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.localPosition = new Vector3(
            Mathf.Cos(Time.time*freq), Mathf.Sin(Time.time * freq), 0f)*amplitude;
    }
}
