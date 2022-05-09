using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputMovile : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.touchCount > 0)
        {
            Touch currentTouch = Input.GetTouch(0);

            if (currentTouch.phase == TouchPhase.Began)
            {
                Debug.Log("toque en : " + currentTouch.position);
            }
            else if (currentTouch.phase == TouchPhase.Ended)
            {
                Debug.Log("levantado " + currentTouch.position);
            }
        }
    }

    private void OnGUI()
    {
        GUI.color = Color.yellow;
        GUILayout.Label("Toques: " + Input.touchCount);
        foreach (Touch touch in Input.touches)
        {
            GUILayout.Label("Touch Position", touch.position.ToString());
        }

        GUILayout.Label("Acelerómetro: " + Input.acceleration);
    }
}
