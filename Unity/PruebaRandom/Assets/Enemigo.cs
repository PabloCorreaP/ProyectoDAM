using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemigo : MonoBehaviour
{
    [HideInInspector]
    public Transform player;

    [HideInInspector]
    public float enemySpeed = 0f;

    [HideInInspector]
    public float killDistance = 0f;

    // Start is called before the first frame update
    void Start()
    {
        float playerDistance = Vector2.Distance(player.position, transform.position);
    }

    // Update is called once per frame
    private void Update()
    {
        if (player == null) return;

        Vector3 playerVector = player.position - transform.position;

        Vector3 speedDirection = playerVector.normalized;
        transform.position += speedDirection * enemySpeed * Time.deltaTime;

        if (playerVector.sqrMagnitude < killDistance * killDistance)
        {
            Debug.Log("Muerto");
            Destroy(player.gameObject);
        }
    }

}
