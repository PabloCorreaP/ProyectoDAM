using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlaneQuaternion : PlaneEuler
{
    protected override void ApplyRotation()
    {
        Vector3 newRotation = Vector3.zero;
        
        newRotation.x = pitch;
        newRotation.y = yaw;
        newRotation.z = roll;
        Quaternion rotation = Quaternion.Euler(newRotation*rotationSpeed*Time.deltaTime);
        transform.rotation *= rotation;
    }
}
