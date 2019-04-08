var changeColor = $("#changeColor");
$(changeColor).click(changeColors);

function changeColors(){
    $("body").toggleClass("change-background");
}

var paragraph = $("#paragraph");
var fontPlus = $("#font-plus");
var fontMinus = $("#font-minus");

$(fontPlus).click(function(){
    var fontSize = 20;
    $(paragraph).css("font-size", fontSize + "px");
});

$(fontMinus).click(function(){
    var fontSize = 16;
    $(paragraph).css("font-size", fontSize + "px");
});