using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class Extensions 
{
    public static T AddOrGetComp<T>(this GameObject o) where T: Component
    {
        T comp = o.GetComponent<T>();

        if (!comp)
        {
            comp = o.AddComponent<T>();
        }
        return comp;
    }


}
