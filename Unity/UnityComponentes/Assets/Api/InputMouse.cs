using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputMouse : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log("izquierdo");
        }
        if (Input.GetMouseButtonUp(0))
        {
            Debug.Log(" soltado  izquierdo");
        }
    }

    private void OnGUI()
    {
        GUI.color = Color.yellow;
        GUILayout.Label("izquierdo : " + Input.GetMouseButton(0));
        GUILayout.Label("Posición: " + Input.mousePosition);
    }
}
