using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MiComponente : MonoBehaviour
{
   

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Enemy"))
        {
            Debug.Log("Destruyendo enemigo: " + collision.gameObject.name);
            Destroy(collision.gameObject);
        }
        else if (collision.gameObject.CompareTag("Friend"))
        {
            Debug.Log("Hola amigo!");
        }
    }
    // Update is called once per frame
 
}
