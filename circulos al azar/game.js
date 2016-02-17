var generate = function(){
	for(i=0; i<9;i++)	{
		var choice = Math.floor(Math.random()*10);
		var choiceN = new String(choice);
		var dni = '#' + choiceN;
		$(dni).toggleClass('activo');
	}	
};

var main = function () {
	generate();
	$("div").click(function(){
		$(this).toggleClass('resuelto');
	});
};


$(document).ready(main);

