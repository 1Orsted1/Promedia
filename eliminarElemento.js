"use strict";

var ArregloCalificaciones = window.arreglocalificacionesActuales;
function eliminarCampo(PosicionABorrar, DatoABorrar) {
  var top = document.getElementById("alumnos");
  var numeroCampo = PosicionABorrar;
  var nested = document.getElementById(("prueva"+numeroCampo));
  var garbage = top.removeChild(nested);
  eliminarDelArreglo(DatoABorrar); 
}

function eliminarDelArreglo(DatoBorrar){

if(DatoBorrar<50){
DatoBorrar = 50;
}
 
var quitarNumero = ArregloCalificaciones.indexOf(DatoBorrar);
window.arreglocalificacionesActuales.splice(quitarNumero, 1);
}
