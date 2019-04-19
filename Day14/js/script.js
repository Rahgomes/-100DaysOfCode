var menuCollapse = {
    menuToggle: function(){
        var menu = $("#nav__menu__toggle");
        var menuLista = $("#menu__lista");

        menuLista.addClass("hidden");

        $(menu).click(function(){
            $(menuLista).slideToggle(1000);
        })
    }
};

menuCollapse.menuToggle();