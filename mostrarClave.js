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
    alert("Debes de rellenar el campo de contraseña");
  } else if (clave1.value == clave2.value) {
    window.AbrirInicio();
  } else {
    alert("Las contraseñas deben coincidir");
  }
}
