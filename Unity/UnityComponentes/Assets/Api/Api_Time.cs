using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_Time : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnGUI()
    {
        GUILayout.BeginHorizontal();
        if (GUILayout.Button("0.2x"))
        {
            Time.timeScale = 0.2f;
        }
        if (GUILayout.Button("1x"))
        {
            Time.timeScale = 1f;
        }
        if (GUILayout.Button("2x"))
        {
            Time.timeScale = 2f;
        }
        GUILayout.EndHorizontal();

        GUI.color = Color.yellow;
        GUILayout.Label("Tiempo:" + Time.time);
        GUILayout.Label("Tiempo sin escala:" + Time.unscaledTime);
        GUILayout.Label("Tiempo desde arranque:" + Time.realtimeSinceStartup);
        GUILayout.Label("Tiempo desde carga del nivel:" + Time.timeSinceLevelLoad);
        GUILayout.Label("Frame deltatime:" + Time.deltaTime);
        GUILayout.Label("Frame fixed deltatime:" + Time.fixedDeltaTime);
        GUILayout.Label("Escala de tiempo:" + Time.timeScale);

    }
}
