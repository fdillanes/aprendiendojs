var main = function () {
	$("div").click(function(){
		$(document).mousemove(function(event){
			var nuevaX = event.pageX - 100;
			var nuevaY = event.pageY - 400;
			var Nx = new String(nuevaX) + "px";
			var Ny = new String(nuevaY) + "px";
			var lugar = new String(event.relatedTarget);
			$("div").css({"top":Ny, "left":Nx}); /* toma solo los divs amarillos, lo cual es fantástico */	
			/*$("div").offset({top: event.pageY, left: event.pageX}) /* lo que mejor funciona es div#ficha */
		});
	})
	/*$(document).mousemove(function(event){
		$("div").click(function(){
			$(this).offset({top: event.pageY, left: event.pageX});
		})
	});*/
}
$(document).ready(main);
