import Constantes from "../constantes";
export default class Hud extends Phaser.Scene{
    
    private vidasTxt: Phaser.GameObjects.Text;
    private puntuacionTxt: Phaser.GameObjects.Text;
    private width: number; 
    private height: number; 
    private textoReloj:Phaser.GameObjects.Text;
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
        this.vidasTxt=this.add.text(20,20,Constantes.HUD.VIDAS+this.registry.get(Constantes.REGISTRO.VIDAS),{fontSize:"32px",color:"#FFFFFF"});
        this.puntuacionTxt=this.add.text(this.width-60,20,"000",{fontSize:"32px",color:"#FFFFFF"});
       nivel1.events.on (Constantes.EVENTOS.RELOJ,this.actializaReloj,this);
        this.textoReloj=this.add.text(this.width/2,20,"05:00",{fontSize:"20px",color:"#FFFFFF"});


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