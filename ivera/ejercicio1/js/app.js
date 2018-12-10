function mostrarBuenas(){
    var buenasnoticias = document.getElementById("buenasnoticias");
    var malasnoticias = document.getElementById("malasnoticias");
    var regularesNoticias = document.getElementById("regularesnoticias");
    if(buenasnoticias.style.display = "none"){
        buenasnoticias.style.display = "flex";
    }
    if(malasnoticias.style.display = "flex"){
        malasnoticias.style.display = "none";
    }
    if(regularesnoticias.style.display = "flex"){
        regularesnoticias.style.display = "none";
    }
 
}

function mostrarMalas(){
    var malasnoticias = document.getElementById("malasnoticias");
    var buenasnoticias = document.getElementById("buenasnoticias");
    var regularesNoticias = document.getElementById("regularesnoticias");
    if(malasnoticias.style.display = "none"){
        malasnoticias.style.display = "flex";
    }
    if(buenasnoticias.style.display = "flex"){
        buenasnoticias.style.display = "none";
    }
    if(regularesnoticias.style.display = "flex"){
        regularesnoticias.style.display = "none";
    }
}

function mostrarRegulares(){
    var regularesNoticias = document.getElementById("regularesnoticias");
    var malasnoticias = document.getElementById("malasnoticias");
    var buenasnoticias = document.getElementById("buenasnoticias");

    if(regularesNoticias.style.display = "none"){
        regularesNoticias.style.display = "flex";
    }
    if(buenasnoticias.style.display = "flex"){
        buenasnoticias.style.display = "none";
    }
    if(malasnoticias.style.display = "flex"){
        malasnoticias.style.display = "none";
    }

}

