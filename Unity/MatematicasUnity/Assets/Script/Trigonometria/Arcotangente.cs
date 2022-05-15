using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Arcotangente : MonoBehaviour
{
    public Transform p1;
    public Transform p2;

    float angleP1=0f;
    float angleP2=0f;
    float anglePDif=0f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        angleP1 = Mathf.Atan2(p1.localPosition.y, p1.localPosition.x)*Mathf.Rad2Deg;
        angleP2 = Mathf.Atan2(p2.localPosition.y, p2.localPosition.x) * Mathf.Rad2Deg;
        anglePDif = angleP2 - angleP1;
    }

    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label("Angulo P1: "+angleP1);
        GUILayout.Label("Angulo P2: " + angleP2);
        GUILayout.Label("Angulo entre p1 y p2: " + anglePDif);

    }

    private void OnDrawGizmos()
    {
        if (p1 && p2)
        {
            Gizmos.color = Color.red;
            Gizmos.DrawLine(transform.position, p1.position);
            Gizmos.color = Color.blue;
            Gizmos.DrawLine(transform.position, p2.position);
        }
    }
}
