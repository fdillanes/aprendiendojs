document.onsubmit = function() {
	var documento =  document.getElementById("formulario");
	var first = document.getElementById("first").value;
	//alert(first);
	// con un formulario inexistente
	var second = document.getElementById("second").value;
	if (second != null) {
		alert(second);
	}
	/*	
	var para=document.createElement("p");
	var node=document.createTextNode(first);
	para.appendChild(node);
	document.body.appendChild(para);
	ESTE MODO FUNCIONA PERO DESAPARECE AL TOQUE 

	var w = window.open();
	w.document.open();
	w.document.write(first);
	w.document.close();//ASI SE LOGRA UNA NUEVA VENTANA */

	document.body.innerHTML += '<div style="border: 1px solid black"> test </div>';
	//var myDiv = document.getElementById("data");
	//myDiv.innerHTML = "este es una purbefar";
	location.href="otro.html";
}
/* prueba 1 conseguir el valor SUPERADO
   prueba 2 conseguir el valor sin conseguir previamente el valor del formulario SUPERADO
   prueba 3 ver si se ignoran los valores de formularios en el html son ignorados SUPERADO
   prueba 4 ver si se ignoran los valores de los formularios en el js son ignorados SUPERADO
   prueba 5 lo que se me ocurra y se necesite
*/	
