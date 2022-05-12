using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random= UnityEngine.Random;
public class Api_random : MonoBehaviour
{
    public GameObject[] prefabs;
    public float maxRange = 10f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R) ){

            Debug.Log("Val ale[0-1]:" + Random.value);
            Debug.Log("Val ale  rango:" + Random.Range(5f, 10f));
        }

        if (Input.GetKeyDown(KeyCode.I))
        {
            int idx = Random.Range(0, prefabs.Length);

            Instantiate(prefabs[idx], Random.onUnitSphere * maxRange, Quaternion.identity);
        }
    }
}
