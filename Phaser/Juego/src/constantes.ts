const Constantes = {
    EVENTOS:{
        VIDAS: 'cambiaVidas',
        PUNTUACION: 'cambiaPuntuacion',
        RELOJ:"reloj"
    },
    MENU:{
        JUGAR: 'Jugar',
        TITULO:"SUPER RANINJA",
        AJUSTES:"AJUSTES",
        CREDITOS:"CREDITOS"
    },
    HUD:{
        VIDAS: 'VIDAS:'
    },    
    ESCENAS:{
        NIVEL1: 'NIVEL 1',
        NIVEL2: "NIVEL 2",
        NIVEL3: "NIVEL 3",
        MENU: 'Menu',
        HUD: 'HUD',
        CARGA: 'Carga',
        AJUSTES:"Ajustes",
        CREDITOS:"creditos",
        SELECCIONNIV:"seleccionNiv",
        FINNIVEL:"finNivel"

    },
    REGISTRO:{
        VIDAS: 'vidas',
        PUNTUACION: 'puntuacion',
        RELOJ:"reloj",
        MUSICA:"musica",
        EFECTOS:"efectos"
    }, 
    MAPAS: {
        NIVEL1:{
            TILEMAPJSON: 'mapaNivel1',
           
        },
        NIVEL2:{
            TILEMAPJSON: 'mapaNivel2',
            
        },
        NIVEL3:{
            TILEMAPJSON: 'mapaNivel3',
           
        },
        CAPAPLATAFORMAS: 'Plataformas',
        TILESET:'nivelestileset',
        POSICIONFINAL:"posicionfinal",
        ENEMIGOS:"enemigos",
        PLATAFORMASMOVILES:"plataformasMoviles",
        PLATAFORMAVERTICAL:"vertical",
        PLATAFORMAHORIZONTAL:"horizontal",
        RECOLECTABLES:"recolectables"
        
    },
    FONDOS:{
        NIVEL1:"Brown",
        NIVEL2:"Pink",
        NIVEL3:"Blue",
        MENU:"Green"
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
    },
    AJUSTES:{
        VOLVER:"VOLVER",
        MUSICA:"MUSICA" ,
        EFECTOS:"EFECTOS",
        SONIDOON:"sonidooon",
        SONIDOOFF:"sonidooff"
    },
    CREDITOS:{
        GAMEDEV:"logoCreador",
        CREADOR:"CURSO OPENWEBINARS WITH PHASER 3.50 AND TYPESCRIPT",
        SPRITES:"SPRITES : PIXEL ADVENTURE BY PIXELFROG\n\n\nMUSIC : FREESOUND CARTOON THEMES LOOP\n\nBY DANIEL NORONHA",
        VOLVER:"VOLVER"
    },
    FINNIVEL:{
        PUNTOS:"PUNTUACION",
        WIN:"YOU WIN",
        GAMEOVER:"GAME OVER!!!"
    }
};
export default Constantes;