import Constantes from "../constantes";
import Nivel1 from "../escenas/nivel1";
import enemigos from "./enemigos";
import recolectables from "./recolectables";
import GestorBD from "../basededatos/gestorbd";
export default class Jugador extends Phaser.Physics.Arcade.Sprite{
   
    
    //input
    private cursores: Phaser.Types.Input.Keyboard.CursorKeys;
    private teclasWASD: any;
    private teclaEspacio: Phaser.Input.Keyboard.Key;

    private escena:Nivel1;

    private tiempoEsperaColisiones:boolean;
    private recolectando:boolean;

    private saltarAudio: Phaser.Sound.BaseSound;
    private caerAudio: Phaser.Sound.BaseSound;
    private recolectarAudio: Phaser.Sound.BaseSound;    
    private vidaAudio: Phaser.Sound.BaseSound;    

    private miBD:GestorBD;
    constructor(config:any){
        super(config.escena,config.x,config.y,config.texture);
        this.miBD= new GestorBD();
        this.escena=config.escena;
        this.escena.physics.world.enable(this);
        this.escena.add.existing(this);

        this.body.setSize(20,30);
        this.setCollideWorldBounds(true);
    
        //Input
        this.cursores=this.escena.input.keyboard.createCursorKeys();
        this.teclasWASD=this.escena.input.keyboard.addKeys("W,A,S,D");
        this.teclaEspacio=this.escena.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //Animacion inicial
        this.play(Constantes.JUGADOR.ANIMACIONES.ESPERA);
        this.recolectando=false;
                  
        this.saltarAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.SALTO);
        this.caerAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.CAIDA);
        this.recolectarAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.RECOLECCION);
        this.vidaAudio = this.escena.sound.add(Constantes.SONIDOS.EFECTOS.QUITARVIDA);
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
            this.reproduceAudio(this.saltarAudio);
        }
    }

    public enemigoToca(jugador: Jugador, enemigo: Phaser.Physics.Arcade.Sprite): void{

        if (jugador.body.velocity.y>100 && enemigo.body.touching.up && jugador.body.touching.down ){                                                             
            if (!jugador.tiempoEsperaColisiones){                                                                     
               jugador.reproduceAudio(jugador.caerAudio);
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
           jugador.reproduceAudio(jugador.vidaAudio);
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
    public recolecta(jugador: Jugador,objeto:Phaser.Physics.Arcade.Sprite):void {
        if (!jugador.recolectando){
            jugador.reproduceAudio(jugador.recolectarAudio);
            jugador.recolectando= true;
            jugador.escena.numObjetosRecolectar--;
            jugador.escena.registry.set(Constantes.REGISTRO.OBJETOSRECOLECTAR, jugador.escena.numObjetosRecolectar);
            jugador.escena.events.emit(Constantes.EVENTOS.RECOLECTAR);

            if (jugador.escena.numObjetosRecolectar==0){ 
                jugador.escena.objetofinal.setAlpha(1);                  
                jugador.escena.objetofinalColision.active = true;
            }

            jugador.escena.puntuacion+= 50;
            jugador.escena.registry.set(Constantes.REGISTRO.PUNTUACION, jugador.escena.puntuacion);
            jugador.escena.events.emit(Constantes.EVENTOS.PUNTUACION);
            //Efecto de desaparicion
            jugador.escena.tweens.add({
                targets: objeto,
                y: objeto.y - 100,
                alpha: 0,
                duration: 800,
                ease: "Cubic.easeOut",
                callbackScope: this,
                onComplete: function(){                
                    jugador.recolectando= false;
                    objeto.destroy();                                 
                }
            });
        }       
    }

    reproduceAudio(audio: Phaser.Sound.BaseSound):void{
        if (this.miBD.datos.efectos){
            audio.play();
        }
    }
}