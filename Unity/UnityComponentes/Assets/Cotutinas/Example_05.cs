using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Example_05 : MonoBehaviour
{
    // Start is called before the first frame update
    IEnumerator Start()
    {
        Debug.Log("Frame actual: " + Time.frameCount);
        yield return new WaitForFixedUpdate();
        Debug.Log("Frame actual: " + Time.frameCount);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    private void FixedUpdate()
    {
        Debug.Log("Soy el FixedUpdate");
        enabled = false;
    }
}
