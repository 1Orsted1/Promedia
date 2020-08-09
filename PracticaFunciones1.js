"use strict";

function AgregarAlumno() {
	var nombre = document.getElementById("alumno"); 
	var calificaciones = document.getElementById("calificacion");
	var div = document.createElement("div");
	div.setAttribute("class", "form-inline");
	div.innerHTML =
		"<div>" +
		'<input type = "text" value = "'+(nombre.value)+'" id=""'+
		"/>"+ 
		"</div>" +
		"<div>" +
		'<input type="text" value = "'+(calificaciones.value)+'" id=""'+
		"/>" +
		"</div>";
	document.getElementById("alumnos").appendChild(div);
	document.getElementById("alumnos").appendChild(div);
}
