$(document).ready(function(){

    $(".card").hide();

    $('#formulario').submit(function(e){
        e.preventDefault();

        

        var nombre = $("#nombre").val();
        $(".card-title").text(nombre);

             var apellido = $("#apellido").val();
        $(".card-text").text(apellido);

        $(".card").show();

        var edad = $("#año-nacimiento").val();
        $(".card-title").text(nombre);


    });

        
        
  
});