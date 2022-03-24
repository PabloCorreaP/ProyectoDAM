import Nivel1 from "./nivel1";

export default class Carga extends Phaser.Scene{
    //Barra
    private barraCarga : Phaser.GameObjects.Graphics;
    private barraProgreso : Phaser.GameObjects.Graphics;
    constructor(){
        super('Carga');
    }

    preload() : void {

        this.cameras.main.setBackgroundColor(0x000000);//Llamamos al objeto camara de la escena para establecer el color de fondo
        this.crearBarras();    
        //Listener mientras se cargan los assests
       this.load.on( 
            'progress',
            function(value : number) {
                this.barraProgreso.clear();
                this.barraProgreso.fillStyle(0x88e453,1);
                this.barraProgreso.fillRect(
                    this.cameras.main.width/4,
                    this.cameras.main.height/2-16,
                    (this.cameras.main.width/2)*value,//El tamaño de la barra va aumentado a medida que se cargan los archivos
                    20
                );
            },
            this
        );
        this.load.on( 
            'complete',
            function() {
               this.scene.start('Menu')//Cambio de escena
            },
            this
        );
            for (let i = 1; i <= 1000; i++) {
               
                this.load.image('logo'+i, 'assets/phaser3-logo.png');
                
            }



    }
   private  crearBarras() : void {
       this.barraCarga=this.add.graphics();//Creamos un nuevo objeto de tipo graphics y lo añadimos a la escena
       this.barraCarga.fillStyle(0xffffff,1)//Rellenamos el objeto de blanco
       this,this.barraCarga.fillRect(
           this.cameras.main.width/4-2,
           this.cameras.main.height/2-18,
           this.cameras.main.width/2+4,
           20
       );
        this.barraProgreso=this.add.graphics();
    }
}