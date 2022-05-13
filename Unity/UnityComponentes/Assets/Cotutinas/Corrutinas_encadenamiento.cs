using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Corrutinas_encadenamiento : MonoBehaviour
{
    IEnumerator A(float t)
    {
        Debug.Log("A, esperando " + t + " segundos...");
        yield return StartCoroutine(B(t * 2));
        Debug.Log("B ha terminado, continua A");
        Debug.Log("A terminado!");
    }
    IEnumerator B(float t)
    {
        Debug.Log("B, esperando " + t + " segundos...");
        yield return new WaitForSeconds(t);
        Debug.Log("B terminado");
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
