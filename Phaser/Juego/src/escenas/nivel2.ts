import Constantes from '../constantes';
import ManejadorNivel from './manejadorNiveles';

export default class Nivel2 extends ManejadorNivel
{
    constructor(){
        super(Constantes.ESCENAS.NIVEL2);
    }

    create (): void {               
        this.creaEscenario(Constantes.MAPAS.NIVEL2.TILEMAPJSON, Constantes.FONDOS.NIVEL2);

        this.crearEnemigos([Constantes.Enemigos.RADISH, Constantes.Enemigos.MUSHROOM]);

        this.crearRecolectables([Constantes.RECOLECTABLES.PLATANO, Constantes.RECOLECTABLES.PINA, Constantes.RECOLECTABLES.CEREZA]);

    }
}