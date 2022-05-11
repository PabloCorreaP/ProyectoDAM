using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Api_Camera : MonoBehaviour
{
    public Camera theCamera;
    // Start is called before the first frame update
    void Start()
    {
        if (Camera.main == theCamera)
        {
            Debug.Log("CAmara principal");
        }
        else
        {
            Debug.Log("No principal");

        }
        //Ej4
        Debug.Log("Limites:"+Camera.main.ViewportToWorldPoint(Vector3.one));
        //Ej5
        Debug.Log("Alto camara" + Camera.main.orthographicSize);
        Debug.Log("Ancho camara" + Camera.main.orthographicSize*Camera.main.aspect);

    }

    // Update is called once per frame
    void Update()
    {
        //Ej1
        if (Input.GetMouseButton(0))
        {
            Vector3 viewportPosition = Camera.main.ScreenToViewportPoint(Input.mousePosition);
            string horizontal = "ninguno";
            string vertical = "ninguno";

            if (viewportPosition.x > 0.5f)
            {
                horizontal = "derecha";
            }
            else
            {
                horizontal = "izquierada";
            }
           
            if (viewportPosition.y> 0.5f)
            {
                vertical = "arriba";
            }
            else
            {
                vertical = "abajo";
            }
            Debug.LogFormat("Pinchate en: {0},{1}", vertical, horizontal);

        }
            //Ej2
            if (Input.GetMouseButton(1))
            {
                Vector3 mousePosition = Input.mousePosition;
                mousePosition.z = 10;

                transform.position = Camera.main.ScreenToWorldPoint(mousePosition);
                Debug.LogFormat("Pinchate en: {0}",mousePosition) ;

            }
    }

    private void OnGUI()
    {
        //Ej3

        GUI.color = Color.yellow;
        Vector3 viewportPosition = Camera.main.WorldToViewportPoint(transform.position);

        string horizontal = "ninguno";
        string vertical = "ninguno";

        if (viewportPosition.x > 0.5f)
        {
            horizontal = "derecha";
        }
        else
        {
            horizontal = "izquierada";
        }

        if (viewportPosition.y > 0.5f)
        {
            vertical = "arriba";
        }
        else
        {
            vertical = "abajo";
        }
        GUILayout.Label(string.Format("Estoy en: {0},{1}", vertical, horizontal));
    }
}
