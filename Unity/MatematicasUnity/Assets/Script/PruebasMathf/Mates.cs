using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mates : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Abs: " + Mathf.Abs(-5));  
        Debug.Log("Clamp 7,2,4: " + Mathf.Clamp(7,2,4));
        Debug.Log("Clamp01: " + Mathf.Clamp01(-1));
        Debug.Log("Floor 4.45: " + Mathf.Floor(4.45f));

    }
    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label("PingPong(0,3) " + Mathf.PingPong(Time.time, 3));
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
