document.onsubmit = function() {
	var first = document.getElementById("first").value;

    var para=document.createElement("p");
    var node=document.createTextNode(first);
    para.appendChild(node);
    document.body.appendChild(para);
    // el docuento se limpia y desaparece //
    }
