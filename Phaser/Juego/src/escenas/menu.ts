import Constantes from "../constantes";
export default class Menu extends Phaser.Scene{
   private width: number; 
   private height: number; 
   private imagenFondo: Phaser.GameObjects.TileSprite;
   
    constructor(){
        super(Constantes.ESCENAS.MENU);
    }
    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
        this.sound.stopAll();

    }
  

    create() {
       this.imagenFondo=this.add.tileSprite(0, 0,this.width, this.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);
        const logo = this.add.image(this.width/2, this.height/2,Constantes.JUGADOR.ID, Constantes.JUGADOR.ANIMACIONES.SALTO).setScale(10);
        const tituloTXT:Phaser.GameObjects.BitmapText=this.add.bitmapText(250, 50, Constantes.FUENTE.BITMAP,Constantes.MENU.TITULO, 20);
        const jugarTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(50,this.height-100,Constantes.FUENTE.BITMAP,"JUGAR",25)
        .setInteractive();
        this.cambiarEscena(jugarTxt,Constantes.ESCENAS.SELECCIONNIV);
        
        const ajustesTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(300,500,Constantes.FUENTE.BITMAP,Constantes.MENU.AJUSTES,20).setInteractive();
        this.cambiarEscena(ajustesTxt,Constantes.ESCENAS.AJUSTES,false);
        const CreditosTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(this.width-200,500,Constantes.FUENTE.BITMAP,Constantes.MENU.CREDITOS,20).setInteractive();
        this.cambiarEscena(CreditosTxt,Constantes.ESCENAS.CREDITOS,false);
    }
    /**
     * Al pulsar sobre el texto nos redijira a la escena indicada
     * @param jugarTxt 
     * @param escena 
     */
    cambiarEscena(jugarTxt: Phaser.GameObjects.BitmapText, escena: string, hud: boolean=true) {
        jugarTxt.on("pointerdown",()=>{this.scene.start(escena);});
           
    }

    update(time: number, delta: number): void {
        this.imagenFondo.tilePositionY-= 0.4;
    }
}