using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Corrutinas_022 : MonoBehaviour
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
        if (Input.GetKeyDown(KeyCode.Space))
        {
            StartCoroutine(CounterCorrutine());
        }
    }

    IEnumerator CounterCorrutine()
    {
        counter = 0f;
        while (counter<1f)
        {
            counter += .1f;
            Debug.Log("count" + counter);
            yield return new WaitForSeconds(1f);
        }
    }
}
