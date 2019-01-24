$(document).ready(function(){
    $(".perros").show();
    $(".gatos").show();
    $(".peces").show();

    $("#btn-perros").click(function(){
        $(".dog").show();
        $(".cat").hide();
        $(".fish").hide();
        $("#btn-perros").addClass('btn-success');
        $("#btn-gatos").removeClass('btn-success');
        $("#btn-peces").removeClass('btn-success');

    });

    $("#btn-gatos").click(function(){
        $(".dog").hide();
        $(".cat").show();
        $(".fish").hide();
        $("#btn-gatos").addClass('btn-success');
        $("#btn-perros").removeClass('btn-success');
        $("#btn-peces").removeClass('btn-success');
    });

    $("#btn-peces").click(function(){
        $(".dog").hide();
        $(".cat").hide();
        $(".fish").show();
        $("#btn-peces").addClass('btn-success');
        $("#btn-gatos").removeClass('btn-success');
        $("#btn-perros").removeClass('btn-success');

    });

    $("#btn-filtros").click(function(){
        $(".dog").show();
        $(".cat").show();
        $(".fish").show();
    });
});