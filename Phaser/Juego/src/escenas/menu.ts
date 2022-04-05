import Constantes from "../constantes";
export default class Menu extends Phaser.Scene{
   private width: number; 
   private height: number; 
   private bandaSonora:  Phaser.Sound.BaseSound;
   
    constructor(){
        super(Constantes.ESCENAS.MENU);
    }
    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
        this.sound.stopAll();

    }
    preload():void{
        this.bandaSonora=this.sound.add(Constantes.SONIDOS.BANDASONORA+0,{loop:true});
        this.bandaSonora.play();
    }

    create() {
        const logo = this.add.image(this.width/2, 70, 'logo1');

        const jugarTxt: Phaser.GameObjects.BitmapText= this.add.bitmapText(50,this.height/2,Constantes.FUENTE.BITMAP,"JUGAR",25)
        .setInteractive();
        this.cambiarEscena(jugarTxt,Constantes.ESCENAS.NIVEL1);
    }
    /**
     * Al pulsar sobre el texto nos redijira a la escena indicada
     * @param jugarTxt 
     * @param escena 
     */
    cambiarEscena(jugarTxt: Phaser.GameObjects.BitmapText, escena: string) {
        jugarTxt.on("pointerdown",()=>{
            this.cameras.main.fade(700, 0, 0, 0);
            this.cameras.main.on('camerafadeoutcomplete',()=>{                                  
                this.sound.stopAll(); 
                this.scene.start(escena);
                this.scene.start(Constantes.ESCENAS.HUD);
                this.scene.bringToTop(Constantes.ESCENAS.HUD);
            });
        });
    }
}