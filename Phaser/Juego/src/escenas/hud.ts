import Constantes from "../constantes";
export default class Hud extends Phaser.Scene{
    
    private vidasTxt:Phaser.GameObjects.BitmapText;
    private puntuacionTxt: Phaser.GameObjects.BitmapText;
    private width: number; 
    private height: number; 
    private textoReloj:Phaser.GameObjects.BitmapText;
    private nombreNivel:string;
    
    private cestaImg : Phaser.GameObjects.Image;
    private recolectados : number;
    private recolectarTxt : Phaser.GameObjects.BitmapText; 
    constructor(){
        super(Constantes.ESCENAS.HUD);
    }
    init(data){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
        this.nombreNivel=data.nombreNivel;
    }
    create(): void{

        const nivel1: Phaser.Scene=this.scene.get(this.nombreNivel);//Asignamos la escena a una variable
        nivel1.events.on(Constantes.EVENTOS.VIDAS,this.actualizavidas,this);
        nivel1.events.on(Constantes.EVENTOS.PUNTUACION,this.actualizaPuntuacion,this);
       
        this.vidasTxt = this.add.bitmapText(20, 20, Constantes.FUENTE.BITMAP, Constantes.HUD.VIDAS + this.registry.get(Constantes.REGISTRO.VIDAS), 20);
        this.puntuacionTxt = this.add.bitmapText(this.width - 50 ,20, Constantes.FUENTE.BITMAP, '000', 20);
        this.textoReloj = this.add.bitmapText(this.width /2 ,20,Constantes.FUENTE.BITMAP, '05:00', 20);
        
        this.cestaImg = this.add.image(20, 50, Constantes.HUD.CESTA).setOrigin(0);
        this.recolectarTxt = this.add.bitmapText(60, 55 , Constantes.FUENTE.BITMAP, this.registry.get(Constantes.REGISTRO.OBJETOSRECOLECTAR), 20);
        nivel1.events.on (Constantes.EVENTOS.RELOJ,this.actializaReloj,this);
        nivel1.events.on(Constantes.EVENTOS.RECOLECTAR, this.actualizaRecolectar, this);


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
    private actualizaRecolectar(): void {
        this.recolectarTxt.text =  this.registry.get(Constantes.REGISTRO.OBJETOSRECOLECTAR);
    }   
}