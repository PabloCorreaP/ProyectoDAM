using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PruebasRandom : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Aleatorio 12-87: "+Random.Range(21,87));
        Debug.Log("Punto en esfera: "+Random.insideUnitSphere);
        Debug.Log("Color: " + Random.ColorHSV());

    }
    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label("Value " + Mathf.PingPong(Time.time, 3f));
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
