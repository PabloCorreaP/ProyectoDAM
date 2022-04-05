import Constantes from "../constantes";
export default class Hud extends Phaser.Scene{
    
    private vidasTxt:Phaser.GameObjects.BitmapText;
    private puntuacionTxt: Phaser.GameObjects.BitmapText;
    private width: number; 
    private height: number; 
    private textoReloj:Phaser.GameObjects.BitmapText;
    constructor(){
        super(Constantes.ESCENAS.HUD);
    }
    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
    }
    create(): void{

        const nivel1: Phaser.Scene=this.scene.get(Constantes.ESCENAS.NIVEL1);//Asignamos la escena a una variable
        nivel1.events.on(Constantes.EVENTOS.VIDAS,this.actualizavidas,this);
        nivel1.events.on(Constantes.EVENTOS.PUNTUACION,this.actualizaPuntuacion,this);
       
        this.vidasTxt = this.add.bitmapText(20, 20, Constantes.FUENTE.BITMAP, Constantes.HUD.VIDAS + this.registry.get(Constantes.REGISTRO.VIDAS), 20);
        this.puntuacionTxt = this.add.bitmapText(this.width - 50 ,20, Constantes.FUENTE.BITMAP, '000', 20);
        this.textoReloj = this.add.bitmapText(this.width /2 ,20,Constantes.FUENTE.BITMAP, '05:00', 20);
        
        nivel1.events.on (Constantes.EVENTOS.RELOJ,this.actializaReloj,this);


    }
    actializaReloj():void {
       this.textoReloj.text=this.registry.get(Constantes.REGISTRO.RELOJ);
    }
    actualizavidas():void {
        this.vidasTxt.text="Vidas:"+this.registry.get(Constantes.REGISTRO.VIDAS);
    }
    actualizaPuntuacion():void {
        this.puntuacionTxt.text=Phaser.Utils.String.Pad(this.registry.get(Constantes.REGISTRO.PUNTUACION),3,"0",1); 
    }
}