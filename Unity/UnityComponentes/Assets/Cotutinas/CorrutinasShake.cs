using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class CorrutinasShake : MonoBehaviour
{

    public float amount=0.2f;
    public float shakeSpeed=2f;
    public float shakeTime=.5f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.C))
        {
            StartCoroutine(Shake());
        }
    }

    IEnumerator Shake()
    {
        Vector3 initPos = transform.localPosition;
        float endTime = Time.time + shakeTime;
        while (Time.time<endTime)
        {
            yield return StartCoroutine(MoveToRandomPoint(initPos));
        }
       
        yield return StartCoroutine(MoveToPoint(initPos));
    }

    IEnumerator MoveToRandomPoint(Vector3 initPos)
    {
        Vector3 randomPoint = Random.insideUnitSphere * amount;
        Vector3 target = initPos + randomPoint;
        yield return StartCoroutine(MoveToPoint(target));
    }

    IEnumerator MoveToPoint(Vector3 localTarger)
    {
      
        while (Vector3.Distance(transform.localPosition, localTarger) > 0.01f)
        {
            transform.localPosition = Vector3.MoveTowards(transform.localPosition, localTarger, shakeSpeed * Time.deltaTime);
            yield return null;
        }
    }

}
