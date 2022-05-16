using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class CotroladorEnemigos : MonoBehaviour
{

    public Transform playerTransform;
    [Header("Enemy Setup")]
    public GameObject enemyPref;
    public float minEnemySpeed = 0.5f;
    public float maxEnemySpeed = 1f;
    [Header("Spawn setup")]
    public float minSpawnT = 1f;
    public float maxSpawnT = 5f;
    public float minSpawnR = 1f;
    public float maxSpawnR = 7f;
    [Header("Game Settings")]
    public float killDistance = 0.1f;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(SpawnEnemyCor());

    }

    IEnumerator SpawnEnemyCor()
    {
        int enemyNumber = 0;

        while (true)
        {
            float waitTime = Random.Range(minSpawnT, maxSpawnT);
            yield return new WaitForSeconds(waitTime);

            if (playerTransform == null) yield break;

            float playerDist = Random.Range(minSpawnR, maxSpawnR);
            Vector2 newPosition = (Vector2)playerTransform.position +
            Random.insideUnitCircle.normalized * playerDist;

            GameObject newEnemy = Instantiate(enemyPref, newPosition, Quaternion.identity);
            newEnemy.name = string.Format("Enemy #{0:00}", enemyNumber++);

            Enemigo enemy = newEnemy.AddComponent<Enemigo>();
            enemy.player = playerTransform;
            enemy.enemySpeed = Random.Range(minEnemySpeed, maxEnemySpeed);
            enemy.killDistance = killDistance;

            newEnemy.GetComponent<SpriteRenderer>().color = Random.ColorHSV();

        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
