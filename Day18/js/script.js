let character = {
    selectCharacter: function () {

        let selectChar = $(".select_char");
        let selected = $(".char_selected");
        let closeChar = $(".closeChar");

        $(selectChar[0]).click(function (event) {
            event.preventDefault();
            $(selected[0]).removeClass("d-none");
            $(selected[0]).addClass("selected");
        });

        $(selectChar[1]).click(function (event) {
            event.preventDefault();
            $(selected[1]).removeClass("d-none");
            $(selected[1]).addClass("selected");
        });

        $(selectChar[2]).click(function (event) {
            event.preventDefault();
            $(selected[2]).removeClass("d-none");
            $(selected[2]).addClass("selected");
        });

        $(closeChar).click(function(event){
            event.preventDefault();
            $(selected).addClass("d-none");
        });
    }
};

character.selectCharacter();