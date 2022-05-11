using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_Screen : MonoBehaviour
{
    int currenRes = 0;
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Resolucion: " + Screen.currentResolution);
        Debug.Log("Resolucion: " + Screen.dpi);
        foreach (var r in Screen.resolutions)
        {
            Debug.Log("Resolucion soportada: " + r.ToString());

        }

    }

    // Update is called once per frame
    void Update()
    {

        if(Input.GetKeyDown(KeyCode.Space)){
                Screen.fullScreen = !Screen.fullScreen;
         }


        if (Input.GetKeyDown(KeyCode.N))
        {
            currenRes = (currenRes + 1) % Screen.resolutions.Length;
            Screen.SetResolution(Screen.resolutions[currenRes].width, Screen.resolutions[currenRes].height,Screen.fullScreen);
        }

    }

    private void OnGUI()
    {
        GUILayout.Label(string.Format("Resolucion: {0}x{1}",Screen.width,Screen.height));
        GUILayout.Label("Fullscreen" + Screen.fullScreen);

    }

}
