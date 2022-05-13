using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Corrutinas_01 : MonoBehaviour
{
    //IEnumerator cr;
    Coroutine cr;

    IEnumerator MiPrimeraCorrutina(float t)
    {
        Debug.Log("Soy la corrutina y espero");
        yield return new WaitForSeconds(t);
        Debug.Log("He terminado");

    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.C))
        {
           // cr = MiPrimeraCorrutina(2f);
           cr= StartCoroutine(MiPrimeraCorrutina(2));
           StartCoroutine(MiPrimeraCorrutina(5));

        }

        if (Input.GetKeyDown(KeyCode.S))
        {
            StopCoroutine(cr);
            StopAllCoroutines();
        }
    }
}
