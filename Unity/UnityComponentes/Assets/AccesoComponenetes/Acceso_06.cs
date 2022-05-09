using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Acceso_06 : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
       // gameObject.AddComponent<Rigidbody>();

    }
    float newMass = 1f;
    private void OnGUI()
    {
        GUILayout.BeginHorizontal();
        GUILayout.Label("Nueva Masa: ");
        newMass = float.Parse(GUILayout.TextField(newMass.ToString()));
        if (GUILayout.Button("Establecer Masa"))
        {
            Rigidbody body = gameObject.AddOrGetComp<Rigidbody>();
            body.mass = newMass;
        }
           GUILayout.EndHorizontal();
    }

        
}

    // Update is called once per frame
   