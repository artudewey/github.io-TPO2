var nombre = document.getElementById("userData");
var mail = document.getElementById("userMail");
var mensaje = document.getElementById("comments");
var error = document.getElementById("Error");
 error.style.color = "red";


function enviarFormulario () {
console.log ("Enviando Formulario...")
   var mensajeError=[];
   
   if(nombre.value === null || nombre.value === " ")
   mensajeError.push ("Ingresa tu nombre");

   if(mail.value === null || mail.value === " ")
   mensajeError.push ("Ingresa tu mail");

   if(mensaje.value === null || mensaje.value === " ")
   mensajeError.push ("Ingresa tu comentario");

   error.innerHTML = mensajeError.join (", ");

   return false


}

