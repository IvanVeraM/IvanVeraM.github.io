function validar(){
    var name = document.forms["registro"]["name"];
    var email = document.forms["registro"]["email"];
    var resultado =document.getElementById("resultado");
    if(name.value==""){       
        alert("El campo nombre está vacío");
        return false;
    } else if(email.value==""){
        alert("Rellena el email");
        return false;
    
    } else if(email.value=="admin@sagradoc.es"){
        alert("Este correo está en uso");
        return false;
    } else {
        resultado.innerHTML="<p>Formulario enviado</p>";
        return false;
    }
}