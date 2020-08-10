"use strict";
var contador = 0;
function AgregarAlumno() {
  contador ++;
  //alert(contador);
	var nombre = document.getElementById("alumno"); 
	var calificaciones = document.getElementById("calificacion");
	var div = document.createElement("div");
	var eliminarCampo = "eliminarCampo";
	div.setAttribute("class", "form-inline");
	div.setAttribute("id",("prueva"+contador));
	div.innerHTML =
		"<div>" +
		'<input type = "text" value = "'+(nombre.value)+'" id="nombre'+contador+'"'+
		"/>"+ 
		"</div>" +
		"<div>" +
		'<input type="text" value = "'+(calificaciones.value)+'" id="calificacion'+contador+'"'+
		"/>" +
		"</div>"+
		"<div>"+
		'<input type="button" name="botonEliminar" id="'+eliminarCampo+contador+'" onClick="eliminarCampo('+contador+')" value="(X)">'+
		"</div>";
	document.getElementById("alumnos").appendChild(div);
	document.getElementById("alumnos").appendChild(div);
}
