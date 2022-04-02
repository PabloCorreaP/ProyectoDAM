const Constantes = {
    EVENTOS:{
        VIDAS: 'cambiaVidas',
        PUNTUACION: 'cambiaPuntuacion'
    },
    MENU:{
        JUGAR: 'Jugar'
    },
    HUD:{
        VIDAS: 'Vidas:'
    },    
    ESCENAS:{
        NIVEL1: 'Nivel1',
        MENU: 'Menu',
        HUD: 'HUD',
        CARGA: 'Carga'
    },
    REGISTRO:{
        VIDAS: 'vidas',
        PUNTUACION: 'puntuacion'
    }, 
    MAPAS: {
        NIVEL1:{
            TILEMAPJSON: 'mapaNivel1',
            CAPAPLATAFORMAS: 'Plataformas'
        },
        TILESET:'nivelestileset',
        POSICIONFINAL:"posicionfinal"
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
    }
};
export default Constantes;