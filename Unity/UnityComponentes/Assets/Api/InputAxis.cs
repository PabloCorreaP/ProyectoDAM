using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputAxis : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            Debug.Log("He pulsado Fire1");
        }
        if (Input.GetButtonUp("Fire1"))
        {
            Debug.Log("He soltado Fire1");
        }
    }

    private void OnGUI()
    {
        GUI.color = Color.yellow;
        GUILayout.Label("Valor de Fire 1 : "+Input.GetButton("Fire1"));
        GUILayout.Label("horizontal: "+Input.GetAxis("Horizontal"));
        GUILayout.Label("vertical: "+Input.GetAxis("Vertical"));
    }
}
