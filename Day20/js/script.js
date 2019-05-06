$("#btn1").click(function(event){
    event.preventDefault();
    alertify.alert("Button 1");
});

$("#btn2").click(function(event){
    event.preventDefault();
    alertify.confirm("Do you want to continue?");
});

$("#btn3").click(function(event){
    event.preventDefault();
    alertify.prompt("Type your message");
});