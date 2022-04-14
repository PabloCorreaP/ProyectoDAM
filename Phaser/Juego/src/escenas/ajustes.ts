import Constantes from "../constantes";
import GestorBD from "../basededatos/gestorbd";
export default class Ajustes extends Phaser.Scene{
    private width: number; 
    private height: number; 
    private imagenFondo: Phaser.GameObjects.TileSprite;

    constructor(){
        super(Constantes.ESCENAS.AJUSTES);

    }

    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
    }

    create(): void{
        let miBD: GestorBD=new GestorBD();
        this.imagenFondo=this.add.tileSprite(0, 0,this.width, this.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);
        
        const volverTXt: Phaser.GameObjects.BitmapText= this.add.bitmapText(80, this.height-100, Constantes.FUENTE.BITMAP, Constantes.AJUSTES.VOLVER,16).setInteractive();
        volverTXt.on("pointerdown",()=>{
            this.scene.start(Constantes.ESCENAS.MENU);
        });
      
        //Crea la imagen con el nombre anterior
        let musicaOnOff: Phaser.GameObjects.Image = this.add.image(130,250,this.getImagenSonido(miBD.datos.musica)).setScale(0.5).setInteractive();
        let efectosOnOff: Phaser.GameObjects.Image = this.add.image(300,250,this.getImagenSonido(miBD.datos.efectos)).setScale(0.5).setInteractive();
    
        musicaOnOff.on('pointerdown', () => { 
            miBD.datos.musica= !miBD.datos.musica;
            miBD.grabarBD();
            musicaOnOff.setTexture(this.getImagenSonido(miBD.datos.musica));
        });

        efectosOnOff.on('pointerdown', () => { 
            miBD.datos.efectos= !miBD.datos.efectos;
            miBD.grabarBD();
            efectosOnOff.setTexture(this.getImagenSonido(miBD.datos.efectos));
        });        

        const musicatxt: Phaser.GameObjects.BitmapText = this.add.bitmapText(80,80, Constantes.FUENTE.BITMAP, Constantes.AJUSTES.MUSICA,16).setInteractive();
        const efectostxt: Phaser.GameObjects.BitmapText = this.add.bitmapText(200,80, Constantes.FUENTE.BITMAP, Constantes.AJUSTES.EFECTOS,16).setInteractive();
    }
   
   
    update(time: number, delta: number): void {
        this.imagenFondo.tilePositionY-= 0.4;
    }

    getImagenSonido(encendido: boolean): string{
        return (encendido)?Constantes.AJUSTES.SONIDOON:Constantes.AJUSTES.SONIDOOFF;
    }
}