let fancyBox = {
    fancy: function(){

        let figures = $(".grid-figure");
        


        $(figures).mouseenter(function(){
            for(var i = 0; i < figures.length; i++){
                $(figures[i]).addClass("fancy_img");
            }
        });

        $(figures).mouseout(function(){
            for(var i = 0; i < figures.length; i++){
                $(figures[i]).removeClass("fancy_img");
            }
        });
    }
};

fancyBox.fancy();