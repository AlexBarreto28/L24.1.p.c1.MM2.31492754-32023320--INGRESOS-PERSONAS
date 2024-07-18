export default class Cl_Ingreso{


    constructor(){
        this.acumIngresosF=0.0;
        this.contF=0;
        this.mayor=0;
        this.auxNombreF="";
    }

procesarPersona(p){

    if(p.sexo =="F"){
        this.contF++;
        this.acumIngresosF+=p.ingreso;
    }

    if(p.ingreso>this.mayor){
        this.mayor=p.ingreso;
        this.auxNombreF=p.nombre;
}
}

devolverMayor(){
    return this.mayor;
}

devolverNombreF(){
    return this.auxNombreF;
}


promedioIngresos(){
    return this.acumIngresosF/this.contF;
}

}
