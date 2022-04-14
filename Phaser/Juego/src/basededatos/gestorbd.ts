import Constantes from "../constantes";

export default class GestorBD{
   
    public datos: any ;

    constructor(){
        //COmporbamos si la base de datos existe y si no es asi la creamos
        if (JSON.parse(localStorage.getItem(Constantes.BD.NOMBRE))){
            this.datos = JSON.parse(localStorage.getItem(Constantes.BD.NOMBRE));

        }else{
            this.creaBD();
        }
           
    }    
    creaBD() {
        let bdInicial = {
            musica: true,efectos: true,
            puntuaciones: {
                nivel1:0,nivel2:0,nivel3:0
            }
        }
        this.datos = bdInicial;
        localStorage.setItem(Constantes.BD.NOMBRE, JSON.stringify(this.datos));        
       
    }

    public grabarBD(){
        localStorage.setItem(Constantes.BD.NOMBRE, JSON.stringify(this.datos));

    }

}