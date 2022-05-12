using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class C_01_invoque : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Invoke("SayHi", 3f);
        InvokeRepeating("SayHi", 5f, 2f);


    }
    public void SayHi()
    {
        Debug.Log("Hola");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
