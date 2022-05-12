using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Corrutina_02 : MonoBehaviour
{
    bool doCount = false;
    float counter = 0f;
    float nextCount = 0f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space)&& !doCount)
        {
            doCount = true;
            counter = 0f;
        }
        if(doCount&& Time.time > nextCount)
        {
            counter+=.1f;
            Debug.Log("" + counter);
            nextCount = Time.time + 1f;
            if (counter>1f)
            {
                doCount = false;
            }

        }
    }
}
