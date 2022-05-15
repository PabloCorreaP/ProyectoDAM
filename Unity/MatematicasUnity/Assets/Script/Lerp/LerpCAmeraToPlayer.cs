using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LerpCAmeraToPlayer : MonoBehaviour
{
    public Transform playerTransform;
    public float moveSpeed = 1f;
    public float distanceToPlayer = 5f;

    float t = 1f;
    Vector3 startPosition;
    Vector3 targetPosition;

    // Start is called before the first frame update
    void Start()
    {
        startPosition = transform.position;
        targetPosition = transform.position;

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            t = 0f;
            startPosition = transform.position;
            targetPosition = playerTransform.position+Vector3.back*distanceToPlayer;
        }
        if (t<=1f)
        {
            t += Time.deltaTime * moveSpeed;
            transform.position = startPosition + (targetPosition - startPosition)*t;
        }
    }

    private void LateUpdate()
    {
        transform.LookAt(playerTransform);
    }
}
