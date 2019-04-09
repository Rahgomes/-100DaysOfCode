var mk11 = {
    character: function(){
        var kabal = $("#kabal");
        var subzero = $("#subzero");
        var jade = $("#jade");
        var aboutCharacter = $(".about-character");
        var buttonSelected = $(".selected");
        
        kabal.click(function(){
            $(aboutCharacter[0]).stop().slideToggle(1000);
        });

        subzero.click(function(){
            $(aboutCharacter[1]).stop().slideToggle(1000);
        });

        jade.click(function(){
            $(aboutCharacter[2]).stop().slideToggle(1000);
        });

        var selectedKabal = $(".row__kabal");
        var selectedSubzero = $(".row__subzero");
        var selectedJade = $(".row__jade");

        var btnClose = $(".close__character");
        btnClose.click(closeCharacter);

        function closeCharacter(e){
            e.preventDefault();

            $(selectedKabal).hide();
            $(selectedSubzero).hide();
            $(selectedJade).hide();
        }

        $(buttonSelected[0]).click(function(){
            $(selectedKabal).show();
        });

        $(buttonSelected[1]).click(function(){
            $(selectedSubzero).show();
        });

        $(buttonSelected[2]).click(function(){            
            $(selectedJade).show();
        });
    }
};

mk11.character();