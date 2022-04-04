import Constantes from "../constantes";
import Nivel1 from "../escenas/nivel1";
import enemigos from "./enemigos";

export default class Jugador extends Phaser.Physics.Arcade.Sprite{
    
    //input
    private cursores: Phaser.Types.Input.Keyboard.CursorKeys;
    private teclasWASD: any;
    private teclaEspacio: Phaser.Input.Keyboard.Key;

    private escena:Nivel1;

    private tiempoEsperaColisiones:boolean;

    constructor(config:any){
        super(config.escena,config.x,config.y,config.texture);
        
        this.escena=config.escena;
        this.escena.physics.world.enable(this);
        this.escena.add.existing(this);

        this.body.setSize(20,30);
        this.setCollideWorldBounds(true);
    
        //Input
        this.cursores=this.escena.input.keyboard.createCursorKeys();
        this.teclasWASD=this.escena.input.keyboard.addKeys("W,A,S,D");
        this.teclaEspacio=this.escena.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.play(Constantes.JUGADOR.ANIMACIONES.ESPERA);
    }

    update(){
         //Movimiento
         if (this.teclasWASD.A.isDown || this.cursores.left.isDown){
            this.setVelocityX(-200);
            if(this.body.blocked.down) this.anims.play(Constantes.JUGADOR.ANIMACIONES.CORRER, true);
            this.flipX = true; 
        }else if (this.teclasWASD.D.isDown || this.cursores.right.isDown){
            this.setVelocityX(200);
            if(this.body.blocked.down) this.anims.play(Constantes.JUGADOR.ANIMACIONES.CORRER, true);
            this.flipX = false; 

        }else {
            this.setVelocityX(0);
            this.anims.play(Constantes.JUGADOR.ANIMACIONES.ESPERA, true);
        }

        if ((this.teclaEspacio.isDown || this.teclasWASD.W.isDown || this.cursores.up.isDown) && this.body.blocked.down){
            this.setVelocityY(-300);
            this.anims.stop();
            this.setTexture(Constantes.JUGADOR.ID, Constantes.JUGADOR.ANIMACIONES.SALTO);
        }
    }

    public enemigoToca(jugador: Jugador, enemigo: Phaser.Physics.Arcade.Sprite): void{

        if (jugador.body.velocity.y>100 && enemigo.body.touching.up && jugador.body.touching.down ){                                                             
            if (!jugador.tiempoEsperaColisiones){                                                                     
                let posX = enemigo.x;
                let posY = enemigo.y;
                enemigo.destroy();
                //Puntuacion
                jugador.escena.puntuacion += 100;
                jugador.escena.registry.set(Constantes.REGISTRO.PUNTUACION, jugador.escena.puntuacion);
                jugador.escena.events.emit(Constantes.EVENTOS.PUNTUACION);
               
                let explosion: Phaser.GameObjects.Sprite = jugador.escena.add.sprite(posX, posY , Constantes.Enemigos.EXPLOSION.ID);                                          
                explosion.play(Constantes.Enemigos.EXPLOSION.ANIM);                            
                explosion.once('animationcomplete', () => {                                
                    explosion.destroy();                            
                });
            }
        }else if (!jugador.tiempoEsperaColisiones){            
            jugador.escena.vidas--;            
            jugador.escena.registry.set(Constantes.REGISTRO.VIDAS, jugador.escena.vidas);
            jugador.escena.events.emit(Constantes.EVENTOS.VIDAS);
            
            //Imvulnerabilidad
            jugador.tiempoEsperaColisiones = true;
            jugador.tint = 0xff0000; 

            jugador.escena.time.addEvent({
                delay: 600,callback: () => {
                    jugador.tiempoEsperaColisiones = false;
                    jugador.tint = 0xffffff; 
                }
            });
        }

    }
}