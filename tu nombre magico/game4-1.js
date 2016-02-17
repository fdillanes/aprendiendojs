var main = function () {
    $("div#ficha").on("click", function(event){
        $(this).offset({"top": event.pageY, "left": event.pageX});
    });

}

$(document).ready(main);
