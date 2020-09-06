var FormularioInicio =
  '<div>' +
  '<form action="#" class="formulario" method="get" accept-charset="utf-8">'+
  " <br>" +
  '<label for="usuario" id="lbusuario">usuario</label>' +
  '<input type="text" name="usuario" id="txtusuario" value="" />' +
  "<br>" +
  '<label for="clave" id="lbclave">contaseña</label>' +
  '<input type="password" name="clave" id="password" value="" />' +
  '<input type="button" id="btn" name="" id="" value="Mostrar" onClick="mostrarClave()">' +
  " <br>" +
  '<input type="submit" name="" id="" value="Aceptar">' +
  "</form>"+
  "</div>";

function getFormInicio() {
  return FormularioInicio;
}


