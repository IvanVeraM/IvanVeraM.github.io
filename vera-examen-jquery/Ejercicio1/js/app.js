$(document).ready(function(){

    $(".card").hide();

    $('#formulario').submit(function(e){
        e.preventDefault();

        

        var nombre = $("#nombre").val();
        $(".card-title").text(nombre);
            

        $(".card").show();

        var edad = $("#año-nacimiento").val();
        $(".card-title").text(nombre);
        

    });

        
        
  
});