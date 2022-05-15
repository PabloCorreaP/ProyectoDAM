using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OutQuad : LerpPositionBase
{
    protected override float TFunc()
    {
        return Mathf.Sin(t*Mathf.PI*0.5f);
    }
    
   
}
