using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CicloDeVida : MonoBehaviour
{
    private int contadorUpdate=0;
    private int contadorFixedUpdate=0;

    private void Awake()
    {
        print("Awake de "+name);
    }

    private void OnEnable()
    {
        Debug.Log("Enable de " + name);
    }

    void Start()
    {
        Debug.Log("Start de " + name);
    }

    private void OnDisable()
    {
        Debug.Log("Enable de " + name);
    }

    private void OnDestroy()
    {
        Debug.Log("Destroy de " + name);
    }

    private void Update()
    {
        contadorUpdate++;
        print("Update " + contadorUpdate);
        
    }

    private void FixedUpdate()
    {
        contadorFixedUpdate++;
        print("Update " + contadorFixedUpdate);
    }

    private void LateUpdate()
    {
        
    }
    float newX, newY, newZ;
    private void OnGUI()
    {
        GUI.color = Color.black;
        
        GUILayout.BeginHorizontal();
        GUILayout.Label("X: ");
       newX=float.Parse(GUILayout.TextField(newX.ToString(),4));
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("Y: ");
        newY = float.Parse(GUILayout.TextField(newY.ToString(),4));
        GUILayout.EndHorizontal();


        GUILayout.BeginHorizontal();
        GUILayout.Label("Z: ");
        newZ = float.Parse(GUILayout.TextField(newZ.ToString(),4));
        GUILayout.EndHorizontal();
        if (GUILayout.Button("Colocar"))
        {
            transform.position = new Vector3(newX, newY, newZ);
        }

    }

    private void OnDrawGizmos()
    {
        
    }

}
