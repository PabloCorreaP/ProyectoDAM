import Constantes from '../constantes';
import ManejadorNivel from './manejadorNiveles';

export default class Nivel3 extends ManejadorNivel
{
    constructor(){
        super(Constantes.ESCENAS.NIVEL3);
    }

    create (): void {               
        this.creaEscenario(Constantes.MAPAS.NIVEL3.TILEMAPJSON, Constantes.FONDOS.NIVEL3,Constantes.PLATAFORMAMOVIL.NIVEL3.ID,Constantes.PLATAFORMAMOVIL.NIVEL3.VELOCIDAD);

        this.crearEnemigos([Constantes.Enemigos.RADISH, Constantes.Enemigos.MUSHROOM]);

        this.crearRecolectables([Constantes.RECOLECTABLES.PLATANO, Constantes.RECOLECTABLES.PINA, Constantes.RECOLECTABLES.CEREZA]);

    }
}