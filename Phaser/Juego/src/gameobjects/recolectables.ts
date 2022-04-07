import Constantes from "../constantes";
import ManejadorNivel from "../escenas/manejadorNiveles";
import Nivel1 from "../escenas/nivel1";
export default class Recoletables extends Phaser.Physics.Arcade.Group{
    
    private escena:ManejadorNivel;

    constructor(escena:ManejadorNivel, nombreObjeto:string, idObjeto:string, animObjeto:string){
        super(escena.physics.world, escena);
        this.escena = escena; 
        this.addMultiple(this.escena.mapaNivel.createFromObjects(nombreObjeto,{name:idObjeto,key:idObjeto}));
        this.escena.physics.world.enable(this.children.entries);

        this.escena.anims.create({
            key:animObjeto,frames: idObjeto,frameRate:20,repeat:-1
        });
        this.children.entries.map((relcoletables:any)=>{
            relcoletables.body.setAllowGravity(false);
            relcoletables.body.setImmovable(true);
            relcoletables.play(animObjeto);

        });
    }

}