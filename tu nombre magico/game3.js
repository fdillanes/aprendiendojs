var codifica = function (letras){
/* devuelve un array con los keycodes de las letras del nombre */
	var pasoPrimero = letras.toLowerCase();
	var pasoSegundo = pasoPrimero.split("");
	var codificado = [];
	for (i = 0; i < pasoSegundo.length; i ++){
		for (j = 0; j < arrayLetras.length; j++){
			if (pasoSegundo[i] === arrayLetras[j]){
				codificado.push(arrayValores[j]);
			}		
		} 	
	}
	return codificado;
}

var getID = function() {
/* arma el ID para el juego de presionar las teclas */
	var m = new String(l);
	var complete = '#' + m;
	return complete;
}


var main = function () {
	var nombre = prompt('introduce tu nombre');
	var base = codifica(nombre);
	for (k=0;k<base.length; k++){
		var elemento = document.createElement("DIV");
		var texto = document.createTextNode(nombre[k].toUpperCase());
		elemento.appendChild(texto);
		var atr = document.createAttribute("class");
		atr.value = "inactivo"; 
		elemento.setAttributeNode(atr);
		var atr2 = document.createAttribute("id");
		atr2.value = new String(k);
		elemento.setAttributeNode(atr2);
		document.body.appendChild(elemento);
	}
	$(document).keypress(function(event){
		var a = base[l]; 
		if (event.which === a) {
			var aux = getID();
			$(aux).toggleClass('activo');
			l++;
			}
		});
}

/* Variables Globales */
var arrayValores = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
var arrayLetras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var l = 0

$(document).ready(main);
