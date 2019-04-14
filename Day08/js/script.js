var events = {
    mouseEvents: function(){
        $(function(){
            eClick();
            dblClick();
            mouseOver();
            mouseDown();
            mouseEnter();
            mouseMove();
            mouseOut();
            mouseUp();
        });

        function eClick(){
            var eventClick = $("#event-click");
            eventClick.click(function(){
                alert("Evento de click acionado!");
            });
        }

        function dblClick(){
            var eventDblClick = $("#event-dblclick");
            eventDblClick.dblclick(function(){
                alert("Evento de double click acionado!");
            });
        }

        function mouseOver(){
            var eventMouseOver = $("#event-mouseover");
            eventMouseOver.mouseover(function(){
                alert("Evento de mouseover acionado!");
            });
        }

        function mouseDown(){
            var eventMouseDown = $("#event-mousedown");
            eventMouseDown.mousedown(function(){
                alert("Evento de mousedown acionado!");
            });
        }

        function mouseEnter(){
            var eventMouseEnter = $("#event-mouseenter");
            eventMouseEnter.mouseenter(function(){
                alert("Evento de mouseenter acionado!");
            });
        }

        function mouseMove(){
            var eventMouseMove = $("#event-mousemove");
            eventMouseMove.mousemove(function(){
                alert("Evento de mousemove acionado!");
            });
        }

        function mouseOut(){
            var eventMouseOut = $("#event-mouseout");
            eventMouseOut.mouseout(function(){
                alert("Evento de mouseout acionado!");
            });
        }

        function mouseUp(){
            var eventMouseUp = $("#event-mouseup");
            eventMouseUp.mouseup(function(){
                alert("Evento de mouseup acionado!");
            });
        }
    }
};

events.mouseEvents();