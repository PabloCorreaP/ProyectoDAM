import Constantes from "../constantes";

export default class SeleccionNivel extends Phaser.Scene {  
    private imagenFondo: Phaser.GameObjects.TileSprite;
    private width: number;
    private height: number;    

    constructor () {
        super(Constantes.ESCENAS.SELECCIONNIV);        
    }

    init(){
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
    }

    create (): void {        

        this.imagenFondo = this.add.tileSprite(0,0, this.cameras.main.width, this.cameras.main.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);

        const nivel1Txt: Phaser.GameObjects.BitmapText= this.add.bitmapText(80,100 , Constantes.FUENTE.BITMAP, Constantes.ESCENAS.NIVEL1,20).setInteractive();
        this.cambiarEscena(nivel1Txt, Constantes.ESCENAS.NIVEL1);
        const nivel2Txt: Phaser.GameObjects.BitmapText= this.add.bitmapText(80,200 , Constantes.FUENTE.BITMAP, Constantes.ESCENAS.NIVEL2,20).setInteractive();
        this.cambiarEscena(nivel2Txt, Constantes.ESCENAS.NIVEL2);
        const nivel3Txt: Phaser.GameObjects.BitmapText= this.add.bitmapText(80,300, Constantes.FUENTE.BITMAP, Constantes.ESCENAS.NIVEL3,20).setInteractive();
        this.cambiarEscena(nivel3Txt, Constantes.ESCENAS.NIVEL3);
        const volverTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(80,450, Constantes.FUENTE.BITMAP, Constantes.CREDITOS.VOLVER,20).setInteractive();
        this.cambiarEscena(volverTxt, Constantes.ESCENAS.MENU, false);
        
    }

    update(): void{
        this.imagenFondo.tilePositionY -= 0.4 ;

    }

    cambiarEscena(texto: Phaser.GameObjects.BitmapText, nuevaEscena : string, hud: boolean = true) : void {
        texto.on("pointerdown", () => {  
            if (!hud){
                this.scene.start(nuevaEscena);                    
            } else {
                this.cameras.main.fade(700, 0, 0, 0);
                this.cameras.main.on("camerafadeoutcomplete", () => {                                
                    this.scene.start(nuevaEscena);              
                    this.scene.start(Constantes.ESCENAS.HUD, {nombreNivel:nuevaEscena});
                    this.scene.bringToTop(Constantes.ESCENAS.HUD);                    
                });
            }
        });
    }

}