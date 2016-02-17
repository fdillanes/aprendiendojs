var getNextLetter = function () {
	return array[i];
}

var getID = function() {
	var l = new String(i+1);
	var complete = '#' + l;
	return complete;
}




var main = function(){
	$(document).keypress(function(event){
	var a = getNextLetter();
	if (event.which === a) {
		var aux = getID();
		$(aux).toggleClass('activo');
		i++;
		main();
		}
	});
}

var array = [116, 111, 109, 97, 115];
var i = 0;


$(document).ready(main);
