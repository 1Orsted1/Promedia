function mostrarClave() {
  var tipo = document.getElementById("password");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}

function comprobarClave() {
  var clave1 = document.getElementById("password");
  var clave2 = document.getElementById("password2");

  if (clave1.value == "" || clave2.value == "") {
    alert("Debes de rellenar el campo de contrase�a");
  } else if (clave1.value == clave2.value) {
    window.AbrirInicio();
  } else {
    alert("Las contrase�as deben coincidir");
  }
}
