export default class Cl_Persona{

    constructor(n,s,i){
        this.nombre=n,
        this.sexo=s;
        this.ingreso=+i;
    }

    set nombre(n){
        this._nombre=n;
    }
    
    set sexo(s){
        this._sexo=s;
    }

    set ingreso(i){
        this._ingreso=+i;
    }
    
    get nombre(){
        return this._nombre;
    }
    
    get sexo(){
        return this._sexo;
    }

    get ingreso(){
        return this._ingreso;
    }

    

}
