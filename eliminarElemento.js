"use strict";

function eliminarCampo(PosicionABorrar) {
  var top = document.getElementById("alumnos");
  var numeroCampo = PosicionABorrar;
  var nested = document.getElementById(("prueva"+numeroCampo));
  console.log("prueva"+numeroCampo);
  var garbage = top.removeChild(nested);
  
}
