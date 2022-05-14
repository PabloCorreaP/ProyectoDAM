using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProductiVectorial : MonoBehaviour
{
    Transform v1;
    Transform v2;

    private void Awake()
    {
        v1 = new GameObject("v1").transform;
        v2 = new GameObject("v2").transform;
        v1.SetParent(transform);
        v2.SetParent(transform);

        v1.localPosition = Random.onUnitSphere;
        v2.localPosition = Random.onUnitSphere;

        

        transform.position = Vector3.zero;
    }

    Vector3 Cross(Vector3 a,Vector3 b)
    {
        return new Vector3(
          (a.y * b.z - a.z * b.y), (a.z * b.x - a.x * b.z), (a.x * b.y - a.y * b.x)
            );
    }

    private void OnGUI()
    {
        GUI.color = Color.black;
        Vector3 cross = Cross(v1.localPosition.normalized, v2.localPosition.normalized);
        GUILayout.Label(string.Format("Cross({0},{1})={2}", v1.localPosition, v2.localPosition,cross ));
        GUILayout.Label(string.Format("Area: {0}",cross.magnitude));
    }

    private void OnDrawGizmos()
    {
        if (v1 && v2)
        {
            Gizmos.color = Color.red;
            Gizmos.DrawLine(transform.position, (Vector2)v1.position);
            Gizmos.color = Color.blue;
            Gizmos.DrawLine(transform.position, (Vector2)v2.position);

            Gizmos.color = Color.white;
            Gizmos.DrawLine(v1.position, v2.position);

            Gizmos.color = Color.green;
            Gizmos.DrawLine(transform.position, transform.position+Cross(v1.localPosition, v2.localPosition));

        }
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
