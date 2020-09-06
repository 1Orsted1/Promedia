var RegistroDesplegado = false;
var InicioDesplegado = false;

function AbrirRegistro() {
  if (RegistroDesplegado == true || InicioDesplegado == true) {
    window.eliminarElementos();
  }
  var div = document.createElement("div");
  div.setAttribute("class", "formulario-creado");
  div.setAttribute("id", "form");
  div.innerHTML = window.getFormRegistro();
  document.getElementById("contenedorInicio").appendChild(div);
  RegistroDesplegado = true;
}

function AbrirInicio() {
  if (RegistroDesplegado == true || InicioDesplegado == true) {
    window.eliminarElementos();
  }
  var div2 = document.createElement("div");
  div2.setAttribute("class", "formulario-creado");
  div2.setAttribute("id", "form");
  div2.innerHTML = window.getFormInicio();
  document.getElementById("contenedorInicio").appendChild(div2);
  InicioDesplegado = true;
}
