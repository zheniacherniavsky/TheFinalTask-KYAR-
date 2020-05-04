var site, value_text, value_page;

function firsttask_select() {
	select = document.getElementById("firstTaskSelect");
	text = document.getElementById("text");

	value_page = select.value;

	value_text = text.value;

	site = window.open();

	site.document.write("<h1>Была открыта: " + value_page + "</h1>");
	site.document.write("<p>Текст: " + value_text + "</p>");
}

function firsttask_close() {
	site.close();
}

function firsttask_change() {
	text = document.getElementById("text");
	value_text = text.value;

	site.document.getElementsByTagName("p")[0].innerHTML = "Текст: " + value_text;
}
// second task

window.onload = function() {
	document.getElementById("value1").innerHTML = navigator.userAgent;
	document.getElementById("value2").innerHTML = navigator.appVersion;
	document.getElementById("value3").innerHTML = navigator.appName;
	document.getElementById("value4").innerHTML = navigator.appCodeName;
	document.getElementById("value5").innerHTML = navigator.platform;
	document.getElementById("value6").innerHTML = navigator.javaEnabled();
	document.getElementById("value7").innerHTML = screen.width + " x " + screen.height;
	document.getElementById("value8").innerHTML = screen.colorDepth;
	document.getElementById("value9").innerHTML = history.length;
	document.getElementById("value10").innerHTML = location.href;
	document.getElementById("value11").innerHTML = location.pathname;
	document.getElementById("value12").innerHTML = location.host;
}

