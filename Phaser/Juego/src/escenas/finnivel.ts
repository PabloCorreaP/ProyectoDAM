import Constantes from "../constantes";

export default class FinNivel extends Phaser.Scene 
{  
    private imagenFondo: Phaser.GameObjects.TileSprite;
    private nombreFondoNivel: string;
    private nombreNivel: string;
    private esWin: boolean;
    private puntuacion: number;

    constructor () {
        super(Constantes.ESCENAS.FINNIVEL);        
    }

    init(data: any):void{
        this.esWin= data.esWin;
        this.nombreNivel= data.nombreNivel;
        this.nombreFondoNivel= data.nombreFondoNivel;        
        this.puntuacion= data.puntuacion;
    }

    create (): void {        
        this.imagenFondo = this.add.tileSprite(0,0,this.cameras.main.width, this.cameras.main.height,this.nombreFondoNivel).setOrigin(0,0).setDepth(-1);  

        if (this.esWin){
            let puntosPad:string= Phaser.Utils.String.Pad(this.puntuacion, 4, '0', 1);
            const winTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(100, 100 , Constantes.FUENTE.BITMAP, Constantes.FINNIVEL.WIN, 40).setTint(0x8338ec);            
            const puntosTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(100, 200 , Constantes.FUENTE.BITMAP, Constantes.FINNIVEL.PUNTOS + puntosPad, 20).setTint(0x8338ec);
        }else{
            const gameOverTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(100, 100 , Constantes.FUENTE.BITMAP, Constantes.FINNIVEL.GAMEOVER, 40).setTint(0xfb5607);            
        }
        
        const volverTxt: Phaser.GameObjects.BitmapText  = this.add.bitmapText(80, 450 , Constantes.FUENTE.BITMAP, Constantes.CREDITOS.VOLVER, 20).setInteractive();

        volverTxt.on('pointerdown', () => {    
            this.cameras.main.fade(700,0,0,0);
            this.cameras.main.on('camerafadeoutcomplete', () => {                              
                this.scene.start(Constantes.ESCENAS.MENU);            
            });
        });

        
        
    }
    update(): void{
        this.imagenFondo.tilePositionY -= 0.4 ;

    }


}