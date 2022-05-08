using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[ExecuteInEditMode]
public class PlayerGizmo : MonoBehaviour
{
    List<EnemyGizmo> enemies;
    // Start is called before the first frame update
    void OnEnable()
    {
        enemies = new List<EnemyGizmo>(FindObjectsOfType<EnemyGizmo>());

    }

    private void OnDrawGizmos()
    {
        if (enemies == null) return;

        Gizmos.color = Color.green;
        EnemyGizmo closerEnemy = null;
        float closer = float.MaxValue;

        foreach (var e in enemies)
        {
            float distance = Vector3.Distance(transform.position, e.transform.position);

            if (distance < closer)
            {
                closer = distance;
                closerEnemy = e;
            }
        }

        if (closerEnemy)
        {
            Gizmos.DrawLine(transform.position, closerEnemy.transform.position);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
