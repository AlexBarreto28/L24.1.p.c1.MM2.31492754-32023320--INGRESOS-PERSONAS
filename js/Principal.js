import Cl_Persona from "./Cl_Persona.js";
import Cl_Ingreso from "./Cl_Ingreso.js";

let Persona1=new Cl_Persona("Mary","F",150);
let Persona2=new Cl_Persona("Jose","M",135);
let Persona3=new Cl_Persona("Carlos","M",160);
let Persona4=new Cl_Persona("Pedro","M",75);
let Persona5=new Cl_Persona("Rosa","F",120);
let Persona6=new Cl_Persona("Carmen","F",120);

let ingreso=new Cl_Ingreso();

ingreso.procesarPersona(Persona1);
ingreso.procesarPersona(Persona2);
ingreso.procesarPersona(Persona3);
ingreso.procesarPersona(Persona4);
ingreso.procesarPersona(Persona5);
ingreso.procesarPersona(Persona6);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br>Promedio de ingreso de las mujeres: " + ingreso.promedioIngresos();
salida.innerHTML+= "<br>Nombre de la persona con mayor ingreso: "+ ingreso.devolverNombreF() + " con un ingreso de: "+ ingreso.devolverMayor();
