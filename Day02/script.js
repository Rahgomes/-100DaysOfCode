$(iniciar);

function iniciar(){
    slider = $("#slider");
    sliderImages = ["imagem-slider--01","imagem-slider--02","imagem-slider--03"];
    indice = 0;

    intervalo = setInterval(mudarFoto, 1000);
    stopSlider();
    restartSlider();
    mudarSlider();
}

function mudarFoto(){
    slider.attr("class", sliderImages[indice]);
    indice++;

    if(indice >= sliderImages.length) {
        indice = 0;
    }
}

function stopSlider(){
    $(slider).mouseover(function(){
        clearInterval(intervalo);
    });
}

function restartSlider(){
    $(slider).mouseout(function(){
        intervalo = setInterval(mudarFoto, 1000);
    });
}

function mudarSlider(){
    var mudaImagem = $("#mudar-slider");
    
    $(mudaImagem).click(function(e){
        e.preventDefault();
        mudarFoto(clearInterval(intervalo));
    });

    $(mudaImagem).mouseout(function(){
        mudarFoto(setInterval(mudarFoto, 1000));
    });
}