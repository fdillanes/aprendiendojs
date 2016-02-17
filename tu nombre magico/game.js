var main = function(){
	$(document).keypress(function(event){
		if(event.which === 116) {
			$('#1').toggleClass('activo');
		} if(event.which === 111) {
			$('#2').toggleClass('activo');
		} if(event.which === 109) {
			$('#3').toggleClass('activo');
		} if(event.which === 97) {
			$('#4').toggleClass('activo');
		} else if(event.which === 115) {
			$('#5').toggleClass('activo');
		}
	});

}

$(document).ready(main);
