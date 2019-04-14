var menu = {
    loremMenu: function(){
        $(function(){
            showSubMenu();
        });

        function showSubMenu(){
            var itemMenu = $(".menu-list-item");
            var subMenu = $(".menu-list-submenu");
            var menu = $(".menu-list");

            $(itemMenu[0]).mouseover(function(){
                $(subMenu).stop().slideDown();
            });

            $(subMenu).mouseleave(function(){
                $(this).stop().slideUp();
            });
        }
    }
};

menu.loremMenu();