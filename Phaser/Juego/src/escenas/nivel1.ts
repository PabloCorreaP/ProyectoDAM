import Constantes from '../constantes';
import ManejadorNivel from './manejadorNiveles';

export default class Nivel1 extends ManejadorNivel
{
    constructor(){
        super(Constantes.ESCENAS.NIVEL1);
    }

    create (): void {               
        this.creaEscenario(Constantes.MAPAS.NIVEL1.TILEMAPJSON, Constantes.FONDOS.NIVEL1);

        this.crearEnemigos([Constantes.Enemigos.BUNNY, Constantes.Enemigos.MUSHROOM]);

        this.crearRecolectables([Constantes.RECOLECTABLES.PLATANO, Constantes.RECOLECTABLES.PINA, Constantes.RECOLECTABLES.CEREZA]);

    }
}