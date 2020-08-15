

// import { hello } from './arreglocalificacionesActuales.js';
var contador = 0;
var arreglocalificacionesActuales = [];
function AgregarAlumno() {
  contador ++;
  //alert(contador); '<label>"'+nombre.value+'"</label>'
	var nombre = document.getElementById("alumno"); 
	var calificaciones = document.getElementById("calificacion");
	var div = document.createElement("div");
	var eliminarCampo = "eliminarCampo";
	div.setAttribute("class", "form-inline");
	div.setAttribute("id",("prueva"+contador));
	div.innerHTML =
	    '<div class="NuevoCampo">'+
		"<div>" +
			'<label>'+nombre.value+'</label>'+
		"</div>"+
		'<div class="espacioBoton">'+
	        	'<label class="espacio">'+calificaciones.value+'</label>'+
		  	'<input type="button" name="botonEliminar" id="'+eliminarCampo+contador+'" onClick="eliminarCampo('+contador+', '+calificaciones.value+')" value="    X    ">'+
		"</div>"+
	    "</div>";
	document.getElementById("alumnos").appendChild(div);
	document.getElementById("alumnos").appendChild(div);
	//console.log(hello());
	agregarArreglo(parseInt(calificaciones.value), 
	(cal) => {
	  arreglocalificacionesActuales.push(cal);
	},
	() =>{
	  arreglocalificacionesActuales.push(50);
	},
	() =>{
	  arreglocalificacionesActuales.push(100);
	}
	);
}

function getArregloCal(){
return arreglocalificacionesActuales;
}

function agregarArreglo(calificacion, MateriaAprobada, MateriaReprobada, MateriaSobrepasada){
  if(calificacion > 100){
   MateriaSobrepasada();
  }else if(calificacion>=50){
  MateriaAprobada(calificacion);
  }else{
  MateriaReprobada();
  }
}



