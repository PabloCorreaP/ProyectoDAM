using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Dot : MonoBehaviour
{
    Transform v1;
    Transform v2;

    private void Awake()
    {
        v1 = new GameObject("v1").transform;
        v2 = new GameObject("v2").transform;
        v1.SetParent(transform);
        v2.SetParent(transform);

        v1.localPosition = Random.insideUnitCircle;
        v2.localPosition = Random.insideUnitCircle;

        v1.localPosition = Random.insideUnitCircle;

        transform.localPosition = Vector3.zero;
    }
   public float dot(Vector2 a, Vector2 b)
    {
        return a.x * b.x + a.y * b.y;
    }
    private void OnGUI()
    {
        GUI.color = Color.black;
        GUILayout.Label(string.Format("dot({0},{1})={2}",v1.localPosition,v2.localPosition,dot(v1.localPosition.normalized,v2.localPosition.normalized)));
    }
    private void OnDrawGizmos()
    {
        if (v1 && v2)
        {
            Gizmos.color = Color.red;
            Gizmos.DrawLine(transform.position, (Vector2)v1.position);
            Gizmos.color = Color.blue;
            Gizmos.DrawLine(transform.position, (Vector2)v2.position);
        }
    }
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
