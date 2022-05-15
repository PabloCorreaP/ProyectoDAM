using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlaneEuler : MonoBehaviour
{
    public float rotationSpeed = 90f;

    protected float pitch;//x
    protected float yaw;//y
    protected float roll;//z


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        pitch = Input.GetAxis("Vertical");
        roll = Input.GetAxis("Horizontal");
        if (Input.GetKeyDown(KeyCode.Q))
        {
            yaw = -1f;
        }
        else if (Input.GetKeyDown(KeyCode.E))
        {
            yaw = 1f;

        }
        else
        {
            yaw = 0f;
        }
        ApplyRotation();
    }

    protected virtual void ApplyRotation()
    {
        Vector3 newRotation = transform.localEulerAngles;
        newRotation.x += pitch * rotationSpeed * Time.deltaTime;
        newRotation.y += yaw * rotationSpeed * Time.deltaTime;
        newRotation.z += roll * rotationSpeed * Time.deltaTime;

        transform.eulerAngles = newRotation;
    }

    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label("Pitch: " + pitch);
        GUILayout.Label("Yaw: " + yaw);
        GUILayout.Label("Roll: " + roll);
    }
}
