import ManejadorNivel from "../escenas/manejadorNiveles";
import Nivel1 from "../escenas/nivel1";

export default class Enemigos extends Phaser.Physics.Arcade.Group{
    private escena:ManejadorNivel;
    private velocidad:number;

    constructor(escena:ManejadorNivel, nombreObjeto:string, idObjeto:string ,animIbjeto: string,velocidad:number){
        super(escena.physics.world, escena);

        this.escena=escena;
        this.velocidad=velocidad;
       //Coge el mapa de nivel y carga los objetos
        this.addMultiple(this.escena.mapaNivel.createFromObjects(nombreObjeto, {name: idObjeto,key:idObjeto}));
        this.escena.physics.world.enable(this.children.entries);

        this.escena.anims.create({key:animIbjeto, frames:idObjeto,
        frameRate:20,repeat:-1});
        //Va cogiendo cada uno de los enemigos    
        this.children.entries.map((enemigo:any)=>{
            enemigo.body.setCollideWorldBounds(true);
            enemigo.play(animIbjeto);
            this.mueveEnemigo((Phaser.Math.Between(0,1)? "izda":"dcha"),enemigo);

        });

    
    }
    mueveEnemigo(direccion: string, enemigo: any) {
        if(direccion=="izda"){
            enemigo.body.setVelocityX(this.velocidad*-1);
            enemigo.flipX=false;
        }
        if(direccion=="dcha"){
            enemigo.body.setVelocityX(this.velocidad);
            enemigo.flipX=true;
        }
    }

    public update():void{
        this.children.entries.map((enemigo:any)=>{
            if(enemigo.body.velocity.x===0){
                this.mueveEnemigo((Phaser.Math.Between(0,1)? "izda":"dcha"),enemigo);
                
            }
            if(enemigo.body.blocked.right){
                this.mueveEnemigo("izda",enemigo);

            }else if(enemigo.body.blocked.left){
                this.mueveEnemigo("dcha",enemigo);

            }
        });
    }

}