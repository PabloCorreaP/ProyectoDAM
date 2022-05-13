using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Corrutina_ecad_parale : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    IEnumerator A(float t)
    {
        Debug.Log("A, esperando " + t + " segundos...");
        Coroutine b = StartCoroutine(B(t * 2));
        yield return new WaitForSeconds(t);
        Debug.Log("he esperado");
        yield return b;
        Debug.Log("B ha terminado");
    }

    IEnumerator B(float t)
    {
        Debug.Log("B, esperando " + t + " segundos...");
        yield return new WaitForSeconds(t);
        Debug.Log("B Hecho!");
    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetKeyDown(KeyCode.C))
        {
            StartCoroutine(A(2));
        }
    }
}
