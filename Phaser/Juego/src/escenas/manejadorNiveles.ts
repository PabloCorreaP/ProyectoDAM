import Constantes from '../constantes';
import Jugador from '../gameobjects/juagador';
import Enemigos from '../gameobjects/enemigos';
import PlataformasMoviles from '../gameobjects/plataformasMoviles';
import Recoletables from '../gameobjects/recolectables';
import GestorBD from '../basededatos/gestorbd';

export default class ManejadorNivel extends Phaser.Scene{
    
    protected nombreNivel:string;

    protected width: number;
    protected height: number;
    public vidas: number;
    public puntuacion: number;
    protected imagenFondo: Phaser.GameObjects.TileSprite;
    //Tiles
    public mapaNivel : Phaser.Tilemaps.Tilemap;
    protected conjuntoPatrones: Phaser.Tilemaps.Tileset;
    protected capaMapaNivel: Phaser.Tilemaps.TilemapLayer;    
    //jugador
    public jugador: Jugador;
    //Tiempo
    protected segundos:number;
    protected tiempoRestante:number;
    protected tiempoAgotado: boolean;

    //Enemigos
    protected grupoEnemigos: Enemigos[];

    //PLataformas
    protected platMovsHor:PlataformasMoviles;
    protected platMovsVer:PlataformasMoviles;
    //Sonidos
    protected bandaSonora:  Phaser.Sound.BaseSound;
    //Recolectables
    protected platanoGroup:Recoletables;
    protected cerezaGroup:Recoletables;
    protected pinaGroup:Recoletables;
    protected nombreFondoNivel:string;

    public numObjetosRecolectar: number;
    public objetofinal: any;
    public objetofinalColision:Phaser.Physics.Arcade.Collider;
    
    constructor(nivel:string){
        super(nivel);
        this.nombreNivel=nivel;
    }

    init():void{
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.puntuacion = 0;          
        this.vidas = 3;
        this.numObjetosRecolectar=0;

        this.registry.set(Constantes.REGISTRO.VIDAS, this.vidas);        
        this.registry.set(Constantes.REGISTRO.PUNTUACION, this.puntuacion); 
       
        this.segundos=1;
        this.tiempoRestante=300;
        this.tiempoAgotado=false;     
        this.sound.stopAll();
        
        this.grupoEnemigos=[];

    }

    preload():void{
       
    }

     creaEscenario(jsonMapa: string, imagenScrolable: string, plataformaMovilID: string, velocidadPlataformaMovil: number): void {
                
        this.crearMapaNivel(jsonMapa)
        this.crearFondoScroll(imagenScrolable);
        this.crearAnimaciones();
        this.crearJugador();
        this.creaObjetoFinal();
        this.crearPlataformasMoviles(plataformaMovilID,velocidadPlataformaMovil);
        this.crearBadaSonora();
    }


    crearMapaNivel(jsonMapa: string, imagenMapa: string = Constantes.MAPAS.TILESET): void {
        //Creacion del mapa
        this.mapaNivel = this.make.tilemap({ key: jsonMapa});
        //Dimensionamos el mundo en base al tilemap
        this.physics.world.bounds.setTo(0, 0, this.mapaNivel.widthInPixels, this.mapaNivel.heightInPixels);
        this.conjuntoPatrones = this.mapaNivel.addTilesetImage(imagenMapa);
        this.capaMapaNivel = this.mapaNivel.createLayer(Constantes.MAPAS.CAPAPLATAFORMAS, this.conjuntoPatrones);
        this.capaMapaNivel.setCollisionByExclusion([-1]);//Capa colisionable
  }

   crearFondoScroll(imagenScroll: string): void {
        this.imagenFondo = this.add.tileSprite(0, 0, this.mapaNivel.widthInPixels, this.mapaNivel.heightInPixels, imagenScroll).setOrigin(0, 0).setDepth(-1);
        this.nombreFondoNivel=imagenScroll;

    }

    finalizaNivel(esWin: boolean = true): void{          
        this.sound.stopAll();
        this.scene.stop(this.nombreNivel);
        this.scene.stop(Constantes.ESCENAS.HUD);            
        this.scene.start(Constantes.ESCENAS.FINNIVEL, {
            esWin: esWin, 
            nombreNivel: this.nombreNivel, 
            nombreFondoNivel: this.nombreFondoNivel,
            puntuacion: this.puntuacion + this.tiempoRestante
        });
        
    }


    crearAnimaciones(){     
        
        this.anims.create({
            key: Constantes.JUGADOR.ANIMACIONES.ESPERA,
            frames:this.anims.generateFrameNames (Constantes.JUGADOR.ID,{prefix: Constantes.JUGADOR.ANIMACIONES.ESPERA + '-',end:11}),
            frameRate: 20,repeat: -1 //-1 Bucle infinito
        });
       
        this.anims.create({
            key: Constantes.JUGADOR.ANIMACIONES.CORRER, 
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID,{ prefix:Constantes.JUGADOR.ANIMACIONES.CORRER + '-',end:11 }),
             frameRate:20,  repeat: -1
        });
        //Explosion
        this.anims.create({
            key: Constantes.Enemigos.EXPLOSION.ANIM, 
            frames:Constantes.Enemigos.EXPLOSION.ID, frameRate:15,  repeat: 0
        });//0 se reproduce una sola vez
       
    }

     crearJugador(){
        //Crecion jugador
     this.mapaNivel.findObject(Constantes.JUGADOR.ID,(d:any)=>{
        this.jugador = new Jugador({escena:this,x:d.x,y:d.y,texture:Constantes.JUGADOR.ID});
     });

      //Confirucion de la camara
      this.cameras.main.setBounds(0,0,this.mapaNivel.widthInPixels,this.mapaNivel.heightInPixels);
      this.cameras.main.startFollow(this.jugador);
     //Colisiones
     this.physics.add.collider(this.jugador,this.capaMapaNivel);

    }

   creaObjetoFinal(){
        //Meta
       this.objetofinal = this.mapaNivel.createFromObjects(Constantes.MAPAS.POSICIONFINAL, {name: Constantes.MAPAS.POSICIONFINAL})[0];                
      this.physics.world.enable(this.objetofinal);
      this.objetofinal.body.setAllowGravity(false);
      this.objetofinal.body.setImmovable(true);
      this.objetofinal.setTexture(Constantes.OBJETOS.FINAL);
      this.objetofinal.body.setSize(40,50);
      this.objetofinal.body.setOffset(10,15);  
      
      this.objetofinal.setAlpha(0);
      
      //Colision entre el jugador y la meta
      this.objetofinalColision= this.physics.add.collider(this.jugador, this.objetofinal, () => {            
         this.finalizaNivel(true);
      });
      this.objetofinalColision.active=false;
    }

     volverMenu(): void{                
        this.cameras.main.fade(700, 0, 0, 0);
        this.cameras.main.on('camerafadeoutcomplete', () => {            
            this.sound.stopAll();
            this.scene.stop(this.nombreNivel);
            this.scene.stop(Constantes.ESCENAS.HUD);
            this.scene.start(Constantes.ESCENAS.MENU);
        });
        }

     crearEnemigos(enemigosConfig:any){
        enemigosConfig.forEach(enemigosConfig => {
            let enemigos:Enemigos =new Enemigos(this, Constantes.MAPAS.ENEMIGOS, enemigosConfig.ID, enemigosConfig.ANIM,enemigosConfig.VELOCIDAD);
            this.physics.add.collider(enemigos, this.capaMapaNivel);    
            this.physics.add.overlap(this.jugador, enemigos, this.jugador.enemigoToca, null, this);
            this.grupoEnemigos.push(enemigos);

        });
        }

     crearPlataformasMoviles(plataformaMovilID: string, velocidadPlataformaMovil: number): void{
        this.platMovsHor = new PlataformasMoviles(this, Constantes.MAPAS.PLATAFORMASMOVILES,plataformaMovilID, velocidadPlataformaMovil, true);
        this.platMovsVer = new PlataformasMoviles(this, Constantes.MAPAS.PLATAFORMASMOVILES, plataformaMovilID, velocidadPlataformaMovil, false);

        this.physics.add.collider(this.jugador, [this.platMovsHor,this.platMovsVer] );
        this.physics.add.collider(this.capaMapaNivel, [this.platMovsHor,this.platMovsVer]);    
    }

    crearRecolectables(recolectablesConfig: any[]): void{
        recolectablesConfig.forEach(enemigosConfig => {
            let recolectables =new Recoletables(this,Constantes.MAPAS.RECOLECTABLES, enemigosConfig.ID, enemigosConfig.ANIM);
            this.physics.add.overlap(this.jugador, recolectables, this.jugador.recolecta, null, this);
    
        });
        this.registry.set(Constantes.REGISTRO.OBJETOSRECOLECTAR, this.numObjetosRecolectar);
    }

    update(time: number, delta: number): void{
        
        //movimiento fondo 
        this.imagenFondo.tilePositionY -= 0.4 ;
       
        this.jugador.update();
        this.grupoEnemigos.forEach(enemigos => {
            enemigos.update();
        });
        this.platMovsHor.update();
        this.platMovsVer.update();

       //Tiempo 
        if ((this.segundos!= Math.floor(Math.abs(time/1000))) && !this.tiempoAgotado) {
            this.segundos=Math.floor(Math.abs(time/1000));
            this.tiempoRestante--;                     

            let minutos:number = Math.floor(this.tiempoRestante/60);                
            let segundos:number= Math.floor(this.tiempoRestante-(minutos*60));                

            let textoReloj: string = Phaser.Utils.String.Pad(minutos,2,'0',1)+":"+Phaser.Utils.String.Pad(segundos,2,'0',1);
            this.registry.set(Constantes.REGISTRO.RELOJ, textoReloj);
            this.events.emit(Constantes.EVENTOS.RELOJ);

            if (this.tiempoRestante == 0){                  
                this.tiempoAgotado = true;                                  
            }            
        }

        if (this.vidas === 0 || this.tiempoAgotado ){
            this.finalizaNivel(false);  
        } 

    }

    crearBadaSonora():void{
        let miBD: GestorBD=new GestorBD();
        if(miBD.datos.musica){

            this.bandaSonora=this.sound.add(Constantes.SONIDOS.BANDASONORA+1,{loop:true,volume:0});
            this.bandaSonora.play();
            //Fade in de sonido
            this.tweens.add({
                targets:this.bandaSonora,
                volume:1,
                duration:2000
            });
        }
    }
}