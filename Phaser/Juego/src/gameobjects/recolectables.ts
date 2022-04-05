import Constantes from "../constantes";
import Nivel1 from "../escenas/nivel1";
export default class Recoletables extends Phaser.Physics.Arcade.Group{
    
    private escena:Nivel1;

    constructor(escena:Nivel1, nombreObjeto:string, idObjeto:string, animObjeto:string){
        super(escena.physics.world, escena);
    }

}