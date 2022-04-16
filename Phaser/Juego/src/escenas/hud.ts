import Constantes from "../constantes";
import ManejadorNivel from "./manejadorNiveles";
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

    private controlIzq: Phaser.GameObjects.Sprite;
    private controlDcha: Phaser.GameObjects.Sprite;
    private controlSalto: Phaser.GameObjects.Sprite; 

    private nivel1: ManejadorNivel;


    constructor(){
        super(Constantes.ESCENAS.HUD);
    }
    init(data){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
        this.nombreNivel=data.nombreNivel;
    }
    create(): void{

        if (this.sys.game.device.input.touch) {
            this.crearControles();
        }

         this.nivel1=<ManejadorNivel>this.scene.get(this.nombreNivel);//Asignamos la escena a una variable
         this.nivel1.events.on(Constantes.EVENTOS.VIDAS,this.actualizavidas,this);
         this.nivel1.events.on(Constantes.EVENTOS.PUNTUACION,this.actualizaPuntuacion,this);
       
        this.vidasTxt = this.add.bitmapText(20, 20, Constantes.FUENTE.BITMAP, Constantes.HUD.VIDAS + this.registry.get(Constantes.REGISTRO.VIDAS), 20);
        this.puntuacionTxt = this.add.bitmapText(this.width - 50 ,20, Constantes.FUENTE.BITMAP, '000', 20);
        this.textoReloj = this.add.bitmapText(this.width /2 ,20,Constantes.FUENTE.BITMAP, '05:00', 20);
        
        this.cestaImg = this.add.image(20, 50, Constantes.HUD.CESTA).setOrigin(0);
        this.recolectarTxt = this.add.bitmapText(60, 55 , Constantes.FUENTE.BITMAP, this.registry.get(Constantes.REGISTRO.OBJETOSRECOLECTAR), 20);
        this.nivel1.events.on (Constantes.EVENTOS.RELOJ,this.actializaReloj,this);
        this.nivel1.events.on(Constantes.EVENTOS.RECOLECTAR, this.actualizaRecolectar, this);


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

    crearControles() {   
        this.input.addPointer(2); //Dos tipos de controles 
        this.controlIzq= this.add.sprite(100,0, Constantes.CONTROL.IZQ).setInteractive();
        this.controlDcha= this.add.sprite(350,0, Constantes.CONTROL.DER).setInteractive();
        this.controlSalto= this.add.sprite(1200 ,0, Constantes.CONTROL.SALTO).setInteractive();

        this.controlIzq.on("pointerdown", () => {
            this.nivel1.jugador.controlIzda = true;            
        });
        this.controlIzq.on("pointerup", () => {
            this.nivel1.jugador.controlIzda = false;
        });

        this.controlIzq.on("pointerout", ()=> {
            this.nivel1.jugador.controlIzda = false;
        });

        this.controlDcha.on("pointerdown", ()=> {
            this.nivel1.jugador.controlDcha = true;
        });
        this.controlDcha.on("pointerup", ()=> {
            this.nivel1.jugador.controlDcha = false;
        });

        this.controlDcha.on("pointerout", ()=> {
            this.nivel1.jugador.controlDcha = false;
        });

        this.controlSalto.on("pointerdown", ()=> {
            this.nivel1.jugador.controlSalto = true;
        });
        this.controlSalto.on("pointerup", ()=> {
            this.nivel1.jugador.controlSalto = false;
        });
        this.controlSalto.on("pointerout", ()=> {
            this.nivel1.jugador.controlSalto = false;
        });

        //POsicion controles
        const controlContainer = this.add.container(50, 390);
        controlContainer.add([
            this.controlIzq,
            this.controlDcha,
            this.controlSalto
        ]);
        controlContainer.setScale(.6).setAlpha(0.8).setScrollFactor(0).setDepth(5);        

        

    }
}