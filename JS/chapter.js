let now = "menu"
speed = "fast"

function cssToMenu() {
	if(now != "menu") {
		$("#CSS_chapter").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#CSS_chapter").fadeIn(speed)
			now = "css"
		});
	}
	
}

function jsToMenu() {
	if(now != "menu") {
		$("#JS_chapter").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#JS_chapter").fadeIn(speed)
			now = "js"
		});
	}
	
}

function xmlToMenu() {
	if(now != "menu") {
		$("#XML_chapter").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#XML_chapter").fadeIn(speed)
			now = "xml"
		});
	}
	
}

function htmlToMenu() {
	if(now != "menu") {
		$("#HTML_chapter").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#HTML_chapter").fadeIn(speed)
			now = "html"
		});
	}
	
}

function addToMenu() {
	if(now != "menu") {
		$("#ADD_chapter").fadeOut(speed, function() {
			$("#menu").fadeIn(speed)
			now = "menu"
		});
	}
	else {
		$("#menu").fadeOut(speed, function() {
			$("#ADD_chapter").fadeIn(speed)
			now = "add"
		});
	}
	
}