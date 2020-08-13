"use strict";


function CalcularPromedio() {
var mostrarArreglo = window.getArregloCal(); 
var promedio = 0;
var sumatoria = 0;
  for (var unidad in mostrarArreglo) {
 sumatoria += mostrarArreglo[unidad];
}
promedio = (sumatoria/mostrarArreglo.length);
  alert("SU PROMEDIO FINAL ES: "+ promedio);
  console.log("EL PROMEDIO ES: "+ promedio);
}
