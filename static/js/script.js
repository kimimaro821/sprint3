function validar_formulario(cual) {
    //si cual = 0 es para validar recuperar clave
    if (cual == 0) {
        var correo = document.getElementById("correo").value;
        if (correo == "") {
            alert("Debe digitar el correo.");
            document.getElementById("correo").focus();
            return false;
        }
//        alert("Le mandamos la clave al correo.");
        return true;
    }
    //si cual = 1 es para validar login
    if (cual == 1) {
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;
        if ((usuario == "") || (usuario.length < 8)) {
            alert("El usuario debe tener mínimo 8 caracteres.");
            document.getElementById("usuario").focus();
            return false;
        }
        if ((clave == "") || (clave.length < 8)) {
            alert("La clave debe tener mínimo 8 caracteres.");
            document.getElementById("clave").focus();
            return false;
        }
    }
    //si cual = 2 es para validar registro
    if (cual == 2) {
        var correo = document.getElementById("correo").value;
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;
        var repetirclave = document.getElementById("repetirclave").value;
        if (correo == "") {
            alert("Debe digitar el correo.");
            document.getElementById("correo").focus();
            return false;
        }
        if ((usuario == "") || (usuario.length < 8)) {
            alert("El usuario debe tener mínimo 8 caracteres.");
            document.getElementById("usuario").focus();
            return false;
        }
        if ((clave == "") || (clave.length < 8)) {
            alert("La clave debe tener mínimo 8 caracteres.");
            document.getElementById("clave").focus();
            return false;
        }
        if (repetirclave == "") {
            alert("No debe haber campos vacíos.");
            document.getElementById("repetirclave").focus();
            return false;
        }
        if (clave != repetirclave) {
            alert("No coinciden las claves.");
            document.getElementById("repetirclave").focus();
            return false;
        }
        //alert("Ha sido registrado. Debe revisar su correo para la activación.");
        return true;

    }
    //si cual = 3 es para validar crear/actualizar imagen
    if (cual == 3) {
        var nombre = document.getElementById("nombre").value;
        var descripcion = document.getElementById("descripcion").value;
        if (nombre == "") {
            alert("Debe digitar el nombre de la imagen.");
            document.getElementById("nombre").focus();
            return false;
        }
        if (descripcion == "") {
            alert("La imagen debe tener una descripción.");
            document.getElementById("descripcion").focus();
            return false;
        }
        return true;

    }
    //si cual = 4 es para validar eliminar imagen
    if (cual == 4) {
        var nombre = document.getElementById("nombre").value;
        if (nombre == "") {
            alert("Debe digitar el nombre de la imagen.");
            document.getElementById("nombre").focus();
            return false;
        }
    }


    return true;
}


function mostrarPassword() {
    document.getElementById("repetirclave").type = "text";
}

function ocultarPassword() {
    document.getElementById("repetirclave").type = "password";
}



function mostrarContrasena(){
    var tipo = document.getElementById("clave");
    if(tipo.type == "password"){
          tipo.type = "text";
    }
}

function ocultarContraseña(id){
    var tipo = document.getElementById("clave");
    if(tipo.type == "text") {
        tipo.type = "password";
  }
}



function cambiar_radio(){
    if (document.getElementById("radioeditable").className =="imChecked") {
        document.getElementById("radioeditable").classList.remove("imChecked");
        document.getElementById("radioeditable").checked = false;
    } else { 
        document.getElementById("radioeditable").classList.add("imChecked");
        document.getElementById("radioeditable").checked = true;
    };
}

