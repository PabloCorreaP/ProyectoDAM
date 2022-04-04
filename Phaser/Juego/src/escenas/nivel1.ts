import Constantes from '../constantes';
import Jugador from '../gameobjects/juagador';
import Enemigos from '../gameobjects/enemigos';
import PlataformasMoviles from '../gameobjects/plataformasMoviles';

export default class Nivel1 extends Phaser.Scene
{
    private width: number;
    private height: number;
    public vidas: number;
    public puntuacion: number;
    private imagenFondo: Phaser.GameObjects.TileSprite;
    //Tiles
    public mapaNivel : Phaser.Tilemaps.Tilemap;
    private conjuntoPatrones: Phaser.Tilemaps.Tileset;
    private capaMapaNivel: Phaser.Tilemaps.TilemapLayer;    
    private jugador: Jugador;

    //Tiempo
    private segundos:number;
    private tiempoRestante:number;
    private tiempoAgotado: boolean;

    //Enemigos
    private bunnyGroup: Enemigos;
    private mushroomGroup: Enemigos;

    //PLataformas
    private platMovsHor:PlataformasMoviles;
    private platMovsVer:PlataformasMoviles;
   
    constructor ()
    {
        super(Constantes.ESCENAS.NIVEL1);
    }

    init(){
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.puntuacion = 0;          
        this.vidas = 3;
        
        this.registry.set(Constantes.REGISTRO.VIDAS, this.vidas);        
        this.registry.set(Constantes.REGISTRO.PUNTUACION, this.puntuacion); 
       
        this.segundos=1;
        this.tiempoRestante=300;
        this.tiempoAgotado=false;     

    }


    preload ()
    {
    }

    create ()
    {        
        const jugarTxt: Phaser.GameObjects.Text = this.add.text(50, this.height/2, 'NIVEL 1', {fontSize:'32px', color:'#FFFFFF'});
       
        const puntuacionTxt: Phaser.GameObjects.Text  = this.add.text(this.width/2  , this.height/2 + 100 , 'Puntuacion',  { fontSize: '32px', color: '#FFFFFF' }).setInteractive();         
                                                        
        puntuacionTxt.on('pointerdown', () => {                                                                    
            this.puntuacion++;
            this.registry.set(Constantes.REGISTRO.PUNTUACION, this.puntuacion);
            this.events.emit(Constantes.EVENTOS.PUNTUACION);
        });
     

        //TileMap
        this.mapaNivel = this.make.tilemap({ key: Constantes.MAPAS.NIVEL1.TILEMAPJSON , tileWidth: 16, tileHeight: 16 });
        //Dimensionamos el mundo en base al tilemap
        this.physics.world.bounds.setTo(0,0,this.mapaNivel.widthInPixels,this.mapaNivel.heightInPixels);

      //Crecion jugador
     this.mapaNivel.findObject(Constantes.JUGADOR.ID,(d:any)=>{
        this.jugador = new Jugador({escena:this,x:d.x,y:d.y,texture:Constantes.JUGADOR.ID});
     });

        //Confirucion de la camara
        this.cameras.main.setBounds(0,0,this.mapaNivel.widthInPixels,this.mapaNivel.heightInPixels);
        this.cameras.main.startFollow(this.jugador);
       
        this.conjuntoPatrones = this.mapaNivel.addTilesetImage(Constantes.MAPAS.TILESET);
        this.capaMapaNivel = this.mapaNivel.createLayer(Constantes.MAPAS.NIVEL1.CAPAPLATAFORMAS, this.conjuntoPatrones);
        this.capaMapaNivel.setCollisionByExclusion([-1]);//capa colisionable

        this.imagenFondo=this.add.tileSprite(0,0,this.mapaNivel.widthInPixels,this.mapaNivel.heightInPixels,Constantes.FONDOS.NIVEL1)
        .setOrigin(0,0).setDepth(-1);
        
        this.anims.create({
            key: Constantes.JUGADOR.ANIMACIONES.ESPERA,
            frames:this.anims.generateFrameNames (Constantes.JUGADOR.ID,{prefix: Constantes.JUGADOR.ANIMACIONES.ESPERA + '-',end:11}),
            frameRate: 20,repeat: -1 //-1 Bucle infinito
        });
       
        this.anims.create({
            key: Constantes.JUGADOR.ANIMACIONES.CORRER, 
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID,{
                prefix:Constantes.JUGADOR.ANIMACIONES.CORRER + '-',end:11 
            }), frameRate:20,  repeat: -1
        });
        //Explosion
        this.anims.create({
            key: Constantes.Enemigos.EXPLOSION.ANIM, 
            frames:Constantes.Enemigos.EXPLOSION.ID, frameRate:15,  repeat: 0
        });//0 se reproduce una sola vez
       
       
       //Colisiones
       this.physics.add.collider(this.jugador,this.capaMapaNivel);
    
      //Meta
      let objetofinal: any = this.mapaNivel.createFromObjects(Constantes.MAPAS.POSICIONFINAL, {name: Constantes.MAPAS.POSICIONFINAL})[0];                
      this.physics.world.enable(objetofinal);
      objetofinal.body.setAllowGravity(false);
      objetofinal.setTexture(Constantes.OBJETOS.FINAL);
      objetofinal.body.setSize(40,50);
      objetofinal.body.setOffset(10,15);        
      //Colision entre el jugador y la meta
      this.physics.add.collider(this.jugador, objetofinal, () => {            
          this.scene.stop(Constantes.ESCENAS.NIVEL1);
          this.scene.stop(Constantes.ESCENAS.HUD);
          this.scene.start(Constantes.ESCENAS.MENU);
      });
        //Enemigos y colisiones
      this.bunnyGroup=new Enemigos(this,Constantes.MAPAS.ENEMIGOS,Constantes.Enemigos.BUNNY.ID,Constantes.Enemigos.BUNNY.ANIM,Constantes.Enemigos.BUNNY.VELOCIDAD,{size:{x:30,y:30},offset:{x:0,y:10}});
      this.physics.add.collider(this.bunnyGroup,this.capaMapaNivel);
      this.physics.add.overlap(this.jugador,this.bunnyGroup,this.jugador.enemigoToca,null,this);
      
      this.mushroomGroup=new Enemigos(this,Constantes.MAPAS.ENEMIGOS,Constantes.Enemigos.MUSHROOM.ID,Constantes.Enemigos.MUSHROOM.ANIM,Constantes.Enemigos.MUSHROOM.VELOCIDAD,{size:{x:32,y:32},offset:{x:0,y:0}});
      this.physics.add.collider(this.mushroomGroup,this.capaMapaNivel);
      this.physics.add.overlap(this.jugador,this.mushroomGroup,this.jugador.enemigoToca,null,this);

      //Plataformas y colisiones
      this.platMovsHor=new PlataformasMoviles(this,Constantes.MAPAS.PLATAFORMASMOVILES,Constantes.PLATAFORMAMOVIL.ID,Constantes.PLATAFORMAMOVIL.VELOCIDAD,true);
      this.platMovsVer=new PlataformasMoviles(this,Constantes.MAPAS.PLATAFORMASMOVILES,Constantes.PLATAFORMAMOVIL.ID,Constantes.PLATAFORMAMOVIL.VELOCIDAD,false);
        //Colisiones con el jugador y el escenario de las plataformas
      this.physics.add.collider(this.jugador,[this.platMovsHor,this.platMovsVer]);
      this.physics.add.collider(this.capaMapaNivel,[this.platMovsHor,this.platMovsVer]);

      
    }

    update(time):void{
        //Fondo
        this.imagenFondo.tilePositionY-=0.4;
        //Control vidas
        if(parseInt(this.registry.get(Constantes.REGISTRO.VIDAS))===0){
            this.scene.stop(Constantes.ESCENAS.NIVEL1);
            this.scene.stop(Constantes.ESCENAS.HUD);
            this.scene.start(Constantes.ESCENAS.MENU);
        }

       this.jugador.update();
       this.bunnyGroup.update();
       this.mushroomGroup.update();
      
       this.platMovsHor.update();
       this.platMovsVer.update();
       //Control tiempo
        if((this.segundos!=Math.floor(Math.abs(time/1000))) && !this.tiempoAgotado){
            this.segundos=Math.floor(Math.abs(time/1000));
            this.tiempoRestante--;

            let minutos: number=Math.floor(this.tiempoRestante/60);
            let segundos: number= Math.floor(this.tiempoRestante-(minutos*60));
            let textoReloj:string= Phaser.Utils.String.Pad(minutos,2,"0",1)+":"+Phaser.Utils.String.Pad(segundos,2,"0",1);
            this.registry.set(Constantes.REGISTRO.RELOJ, textoReloj);
            this.events.emit(Constantes.EVENTOS.RELOJ);
        
            if(this.tiempoRestante<=0){
                this.tiempoAgotado=true;
                this.scene.stop(Constantes.ESCENAS.NIVEL1);
                this.scene.stop(Constantes.ESCENAS.HUD);
                this.scene.start(Constantes.ESCENAS.MENU);
            }
        }
       
    }
}