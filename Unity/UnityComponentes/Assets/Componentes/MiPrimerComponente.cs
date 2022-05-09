using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class MiPrimerComponente : MonoBehaviour
{
    public int vida=3;
    public int strnght=180;
    [HideInInspector]
    public bool isDead = false;
    public string nombre = "Nombre";
   // [SerializeField]
  //  private float timeLeft = 300;

    


    // Start is called before the first frame update
    void Start()
    {
        print("Soy "+name);
        print("Hijos: " + transform.childCount);
        transform.position = new Vector3(0f,2f,0f);
        transform.localScale = Vector3.one*2f;
        transform.localRotation = Quaternion.Euler(0,45,0);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
