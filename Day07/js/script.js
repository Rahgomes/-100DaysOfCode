var pluginTooltipster = {
    tooltipsterTest: function(){
        $(document).ready(function() {
            $('.tooltip').tooltipster();
        });

        var img = $("#main-img");

        $(img).mouseover(function(){
            setTimeout(function(){
                Swal.fire(
                    'É isso ai!!!',
                    'Você viu o Tooltipster acima da imagem e agora está vendo o SweetAlert!!!',
                    'success'
                  )
            }, 1500);
        });
    }
};

pluginTooltipster.tooltipsterTest();