var navigation = {
    navigationMenu: function(){
        var menu = $(".main-item");
        var image = $("#main-background");
        var home =  menu[0];
        var features = menu[1];
        var portfolio = menu[2];
        var clients = menu[3];
        var blog = menu[4];
        var contact = menu[5];
        
        $(home).click(function(){
            image.attr("class", "img");
        });

        $(features).click(function(){
            image.attr("class", "img2");
        });

        $(portfolio).click(function(){
            image.attr("class", "img3");
        });

        $(clients).click(function(){
            image.attr("class", "img4");
        });

        $(blog).click(function(){
            image.attr("class", "img5");
        });

        $(contact).click(function(){
            image.attr("class", "img6");
        });
    }
};

navigation.navigationMenu();