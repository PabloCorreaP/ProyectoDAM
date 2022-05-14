using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Aritmetica01 : MonoBehaviour
{
    public Vector2 v2= Vector2.one;
    public Vector2 v1= Vector2.zero;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.S))
        {
            Evaluate("Suma",v1+v2,Suma(v1,v2));
            Evaluate("Resta", v2-  v1, Resta(v1, v2));

        }
    }

    private void Evaluate(string opName,Vector2 expected,Vector2 calculated)
    {
        if (expected == calculated)
        {
            Debug.LogFormat("La op {0} es ok:{1}",opName,expected);
        }
        else
        {
            Debug.LogErrorFormat("Error  {0}. Esperado {1} se obtuvo {2}", opName, expected, calculated);
        }
    }

    Vector2 Suma(Vector2 a, Vector2 b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
    Vector2 Resta(Vector2 a, Vector2 b)
    {
        return new Vector2(b.x - a.x, b.y - a.y);
    }

    Vector2 Multiplicar(Vector2 a, float b)
    {
        return new Vector2(a.x*b,a.y*b);
    }
}
