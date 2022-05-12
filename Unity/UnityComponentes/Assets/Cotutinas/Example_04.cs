using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Example_04 : MonoBehaviour
{
    // Start is called before the first frame update
    IEnumerator Start()
    {
        Time.timeScale = 0.2f;
        Debug.Log("Frame actual: " + Time.frameCount);
        //yield return new WaitForSeconds(1f);
        yield return new WaitForSecondsRealtime(1f);
        Debug.Log("Frame actual: " + Time.frameCount);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
