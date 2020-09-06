var FormularioRegistro =
  "<div>" +
  '<form method="post" class="formularioRegistro " action="#" accept-charset="utf-8" >'+
  " <br>" +
  '<label for="nombre">Introduce tu nombre</label>'+
  '<input type="text" name="nombre" id="" value="" />' +
  "<br>" +
'<label for="correo">Introduce tu correo electronico</label>'+
 '<input type="email" name="correo" id="" value="">' +
  "<br>" +
'<label for="clave">Crea tu contraseña</label>'+
  '<input type="password" name="" id="password" value="" />' +
  '<input type="button" name="" id="" value="Mostrar" onClick="mostrarClave()">' +
  " <br>" +
'<label for="clave">Vuelve a introducir tu contraseña</label>'+
  '<input type="password" name="" id="password2" value="" />' +

  " <br>" +
  '<input type="button" name="" id="" value="Aceptar" onClick="comprobarClave()">' +
  "</form>"+
  "</div>";

function getFormRegistro() {
  return FormularioRegistro;
}
