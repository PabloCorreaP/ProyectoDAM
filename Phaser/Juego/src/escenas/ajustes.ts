import Constantes from "../constantes";

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
        this.imagenFondo=this.add.tileSprite(0, 0,this.width, this.height,Constantes.FONDOS.MENU).setOrigin(0,0).setDepth(-1);
        
        const volverTXt: Phaser.GameObjects.BitmapText= this.add.bitmapText(80, this.height-100, Constantes.FUENTE.BITMAP, Constantes.AJUSTES.VOLVER,16).setInteractive();
        volverTXt.on("pointerdown",()=>{
            this.scene.start(Constantes.ESCENAS.MENU);
        });
        //Asigna a las variables el nombre de la image
        let musicaImagen: string = (this.registry.get(Constantes.REGISTRO.MUSICA)==Constantes.AJUSTES.SONIDOON)? Constantes.AJUSTES.SONIDOON : Constantes.AJUSTES.SONIDOOFF;
        let efectosImagen:string = (this.registry.get(Constantes.REGISTRO.EFECTOS)== Constantes.AJUSTES.SONIDOON)? Constantes.AJUSTES.SONIDOON : Constantes.AJUSTES.SONIDOOFF;
        //Crea la imagen con el nombre anterior
        let musicaOnOff: Phaser.GameObjects.Image = this.add.image(130,120,musicaImagen).setScale(0.5).setInteractive();
        let efectosOnOff: Phaser.GameObjects.Image = this.add.image(250,120,efectosImagen).setScale(0.5).setInteractive();
    
        musicaOnOff.on('pointerdown', () => { 
            let valor = (this.registry.get(Constantes.REGISTRO.MUSICA)==Constantes.AJUSTES.SONIDOON)? Constantes.AJUSTES.SONIDOOFF : Constantes.AJUSTES.SONIDOON; 
            this.registry.set(Constantes.REGISTRO.MUSICA, valor);
            musicaOnOff.setTexture(valor);
        });

        efectosOnOff.on('pointerdown', () => { 
            let valor= (this.registry.get(Constantes.REGISTRO.EFECTOS)==Constantes.AJUSTES.SONIDOON)? Constantes.AJUSTES.SONIDOOFF : Constantes.AJUSTES.SONIDOON; 
            this.registry.set(Constantes.REGISTRO.EFECTOS,valor);
            efectosOnOff.setTexture(valor);
        });        

        const musicatxt: Phaser.GameObjects.BitmapText = this.add.bitmapText(80,80, Constantes.FUENTE.BITMAP, Constantes.AJUSTES.MUSICA,16).setInteractive();
        const efectostxt: Phaser.GameObjects.BitmapText = this.add.bitmapText(200,80, Constantes.FUENTE.BITMAP, Constantes.AJUSTES.EFECTOS,16).setInteractive();
    }
   
   
    update(time: number, delta: number): void {
        this.imagenFondo.tilePositionY-= 0.4;
    }
}