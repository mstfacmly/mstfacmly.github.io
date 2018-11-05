function responsive() {
	var x = document.getElementById("topNav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}

	var i = document.getElementById("icon");
	if (i.className === "fa fa-bars") {
		i.className = "fas fa-times";
	} else {
		i.className = "fa fa-bars";
	}
}
