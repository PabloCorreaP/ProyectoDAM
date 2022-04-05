import Constantes from '../constantes';

export default class Carga extends Phaser.Scene 
{
    
    private barraCarga: Phaser.GameObjects.Graphics;
    private barraProgreso: Phaser.GameObjects.Graphics;
    private height: number;
    private width: number;

    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
    }
    constructor () {
        super(Constantes.ESCENAS.CARGA);
    }

    preload (): void {

        this.cameras.main.setBackgroundColor(0x000000);
        this.creaBarras();
        
        this.load.on(
            'progress',
            function (value: number) {
              this.barraProgreso.clear();
              this.barraProgreso.fillStyle(0x125555, 1);
              this.barraProgreso.fillRect(
                this.width / 4,
                this.height / 2 - 16,
                (this.width / 2) * value,
                16
              );
            },
            this
        );

        this.load.on(
            "complete",
            function () {
                //carga de la fuente
                const fuenteJSON= this.cache.json.get(Constantes.FUENTE.JSON);
                this.cache.bitmapFont.add(Constantes.FUENTE.BITMAP,Phaser.GameObjects.RetroFont.Parse(this,fuenteJSON));
                this.scene.start(Constantes.ESCENAS.MENU);
            },
            this
        );

       //Carga  
       this.load.path="assets/" ;  
        this.load.image("logo1", "phaser3-logo.png");        
        this.load.tilemapTiledJSON(Constantes.MAPAS.NIVEL1.TILEMAPJSON, 'niveles/nivel1.json');
        this.load.image(Constantes.MAPAS.TILESET, 'niveles/nivelestileset.png');

        this.load.image(Constantes.FONDOS.NIVEL1,"imagenes/Brown.png")
        
        this.load.json(Constantes.FUENTE.JSON,"fuentes/fuente.json");
        this.load.image(Constantes.FUENTE.IMAGEN,"fuentes/imagenFuente.png");
   
        this.load.atlas(Constantes.JUGADOR.ID,"imagenes/jugador/ninja.png","imagenes/jugador/ninja.json")
   
        this.load.image(Constantes.OBJETOS.FINAL,"imagenes/objetos/trofeo.png");
            
        this.load.spritesheet(Constantes.Enemigos.BUNNY.ID,"imagenes/enemigos/bunny.png",{frameWidth:34,frameHeight:44});
        this.load.spritesheet(Constantes.Enemigos.CHICKEN.ID,"imagenes/enemigos/chiken.png",{frameWidth:32,frameHeight:34});
        this.load.spritesheet(Constantes.Enemigos.MUSHROOM.ID,"imagenes/enemigos/mushroom.png",{frameWidth:32,frameHeight:32});
        this.load.spritesheet(Constantes.Enemigos.RADISH.ID,"imagenes/enemigos/radish.png",{frameWidth:30,frameHeight:38});
        
        this.load.spritesheet(Constantes.Enemigos.EXPLOSION.ID,"imagenes/enemigos/explosion.png",{frameWidth:33,frameHeight:38});
        
       this.load.image(Constantes.PLATAFORMAMOVIL.ID,"imagenes/objetos/plataformaMovil.png") 
       
      this.load.audio(Constantes.SONIDOS.EFECTOS.SALTO, "sonidos/efectos/salto.ogg");
      this.load.audio(Constantes.SONIDOS.EFECTOS.CAIDA, "sonidos/efectos/caida.ogg");
      this.load.audio(Constantes.SONIDOS.EFECTOS.QUITARVIDA, "sonidos/efectos/vida.ogg");
      this.load.audio(Constantes.SONIDOS.EFECTOS.RECOLECCION, "sonidos/efectos/recolectar.ogg");         

      for (let i=0; i<=2; i++){
          this.load.audio(Constantes.SONIDOS.BANDASONORA + i, `sonidos/bandasonora/cartoongame${i}.ogg`);
      }

        this.load.spritesheet(Constantes.RECOLECTABLES.PLATANO.ID, 'imagenes/objetos/platano.png', {frameWidth:32, frameHeight:32});
        this.load.spritesheet(Constantes.RECOLECTABLES.PINA.ID, 'imagenes/objetos/pina.png', {frameWidth:32, frameHeight:32});
        this.load.spritesheet(Constantes.RECOLECTABLES.CEREZA.ID, 'imagenes/objetos/cereza.png', {frameWidth:32, frameHeight:32});


    }

    private creaBarras(): void {
        this.barraCarga = this.add.graphics();
        this.barraCarga.fillStyle(0xffffff, 1);
        this.barraCarga.fillRect(
          this.cameras.main.width / 4 - 2,
          this.cameras.main.height / 2 - 18,
          this.cameras.main.width / 2 + 4,
          20
        );
        this.barraProgreso = this.add.graphics();
    }


}