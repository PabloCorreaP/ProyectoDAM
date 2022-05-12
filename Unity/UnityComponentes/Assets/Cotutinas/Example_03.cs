using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Example_03 : MonoBehaviour
{
    // Start is called before the first frame update
    IEnumerator Start()
    {
        Debug.Log("Frame actual: " + Time.frameCount);
        yield return new WaitForSeconds(3f);
        Debug.Log("Frame actual: " + Time.frameCount);
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
