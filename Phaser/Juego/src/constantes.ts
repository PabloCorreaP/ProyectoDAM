const Constantes = {
    EVENTOS:{
        VIDAS: 'cambiaVidas',
        PUNTUACION: 'cambiaPuntuacion',
        RELOJ:"reloj"
    },
    MENU:{
        JUGAR: 'Jugar'
    },
    HUD:{
        VIDAS: 'VIDAS:'
    },    
    ESCENAS:{
        NIVEL1: 'Nivel1',
        MENU: 'Menu',
        HUD: 'HUD',
        CARGA: 'Carga'
    },
    REGISTRO:{
        VIDAS: 'vidas',
        PUNTUACION: 'puntuacion',
        RELOJ:"reloj"
    }, 
    MAPAS: {
        NIVEL1:{
            TILEMAPJSON: 'mapaNivel1',
            CAPAPLATAFORMAS: 'Plataformas'
        },
        TILESET:'nivelestileset',
        POSICIONFINAL:"posicionfinal",
        ENEMIGOS:"enemigos",
        PLATAFORMASMOVILES:"plataformasMoviles",
        PLATAFORMAVERTICAL:"vertical",
        PLATAFORMAHORIZONTAL:"horizontal",
        RECOLECTABLES:"recolectables"
        
    },
    FONDOS:{
        NIVEL1:"Brown"
    },
    FUENTE:{
        JSON:"fuentesJSON",
        IMAGEN:"imagenFuente",
        BITMAP:"fuentePixel"
    },JUGADOR:{
        ID:"jugador",
        ANIMACIONES:{
        ESPERA:"idle",
        CORRER:"run",
        SALTO:"jump-0"
        }

    },OBJETOS:{
        FINAL:"objFInal"
    },
    Enemigos:{
        BUNNY:{
            ID:"bunny",
            ANIM:"bunnyCorre",
            VELOCIDAD:75
        },
        CHICKEN:{
            ID:"chicken",
            ANIM:"chickenCorre",
            VELOCIDAD:100
        },
        MUSHROOM:{
            ID:"mushroom",
            ANIM:"mushroomCorre",
            VELOCIDAD:100
        },
        RADISH:{
            ID:"radish",
            ANIM:"radishCorre",
            VELOCIDAD:100
        },EXPLOSION:{
            ID:"explosion",
            ANIM:"explota"
        }
    },
    PLATAFORMAMOVIL:{
        ID:"plataformaMovil",
        VELOCIDAD:60
    },
    SONIDOS:{
        EFECTOS:{
            SALTO:"salto",
            CAIDA:"caida",
            QUITARVIDA:"vida",
            RECOLECCION:"recoleccion"
        },
        BANDASONORA:"bandasonora"
    },
    RECOLECTABLES:{
        PLATANO:{
            ID:"platano",
            ANIM:"platanoAnim"
        },
        PINA:{
            ID:"pina",
            ANIM:"pinaAnim"
        },
        CEREZA:{
            ID:"cereza",
            ANIM:"cerezaAnim"
        }
    }
};
export default Constantes;