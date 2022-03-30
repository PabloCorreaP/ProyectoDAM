import Constantes from "../constantes";
export default class Nivel1 extends Phaser.Scene
{

    private width: number; 
    private height: number; 
    private vidas: number;
    private puntuacion: number;

    private mapaNivel: Phaser.Tilemaps.Tilemap;
    private conjuntoPatrones :Phaser.Tilemaps.Tileset;
    private capaMapaNivel: Phaser.Tilemaps.TilemapLayer;

    constructor ()
    {
        super(Constantes.ESCENAS.NIVEL1);
    }
    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
        this.vidas=3;
        this.puntuacion=0;
        this.registry.set(Constantes.REGISTRO.PUNTUACION,this.puntuacion);
        this.registry.set(Constantes.REGISTRO.VIDAS,this.vidas);

    }
    preload ()
    {
        
    }

    create ()
    {
       

        const logo = this.add.image(400, 70, 'logo1');
        const jugarTxt: Phaser.GameObjects.Text= this.add.text(50,this.height/2,"Nivel 1",{fontSize:"32px", color:"#FFFFFF"});
        const vidasTxt: Phaser.GameObjects.Text= this.add.text(this.width/2,this.height/2,"Vidas -",{fontSize:"32px", color:"#FFFFFF"}).setInteractive();
       vidasTxt.on("pointerdown",()=>{
           this.vidas --;
           this.registry.set(Constantes.REGISTRO.VIDAS,this.vidas);
           this.events.emit(Constantes.EVETOS.VIDAS);
       });
       const puntuacionTxt: Phaser.GameObjects.Text=this.add.text(this.width/2,this.height/2-50,"Puntos +",{fontSize:"32px", color:"#FFFFFF"}).setInteractive();
       puntuacionTxt.on("pointerdown",()=>{
           this.puntuacion++;
           this.registry.set(Constantes.REGISTRO.PUNTUACION,this.puntuacion);
           this.events.emit(Constantes.EVETOS.PUNTUACION);
       });

       this.mapaNivel=this.make.tilemap({key: Constantes.MAPAS.NIVEL1.TILEMAPJSON,tileWidth:16,tileHeight:16});
       this.conjuntoPatrones=this.mapaNivel.addTilesetImage(Constantes.MAPAS.TILESET);
       this.capaMapaNivel=this.mapaNivel.createLayer(Constantes.MAPAS.NIVEL1.CAPAPLATAFORMAS, this.conjuntoPatrones);
    
    }
}