function firsttask() {
	ft = new Array();
	ft[0] = 6*Math.pow(Math.PI,2) + 3 * Math.pow(Math.E, 8);
	ft[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3);
	ft[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
	ft[3] = 2 * Math.tan(5) + 6*Math.PI + Math.sqrt(12);

	for (var i = 0; i < ft.length; i++) {
		document.write(ft[i].toFixed(3) + " ["+i+"]<br>");
	}
	document.write("<br>Max Number: " + Math.max(ft[0],ft[1],ft[2],ft[3]));
	document.write("<br>Min Number: " + Math.min(ft[0],ft[1],ft[2],ft[3]));
}

function secondtask() {
	let mix = new Array("pow","pop","push","shift","round","floor","sline","sort");
	let math = new Array; // pow round floor sline
	let array = new Array; // pop push shift sort

	for (var i = 0; i < mix.length; i++) {
		if(mix[i] == "pow" || mix[i] == "round" || mix[i] == "floor" || mix[i] == "sline") {
			math.push(mix[i]);
		}
		else {
			array.push(mix[i]);
		}
	}
	let text = "1 - Mixed, 2 - Math, 3 - Array\n";
	for (var i = 0; i < mix.length; i++) {
		text += mix[i] + " ";
	}
	text += " ["+mix.length+"]\n";
	for (var i = 0; i < math.length; i++) {
		text += math[i] + " ";
	}
	text += " ["+math.length+"]\n";
	for (var i = 0; i < array.length; i++) {
		text += array[i] + " ";
	}
	text += " ["+array.length+"]\n\n";

	text += "After adding some functions: \n";
	math.unshift("cos");
	math.push("sin");
	for (var i = 0; i < math.length; i++) {
		text += math[i] + " ";
	}
	text += " ["+math.length+"]\n";
	array.unshift("unshift");
	array.push("length");
	for (var i = 0; i < array.length; i++) {
		text += array[i] + " ";
	}
	text += " ["+array.length+"]\n\n";
	alert(text);
}

function thirdtask() {
	let name = prompt("Введите ваше ФИО");
	let text = name + "\n";
	text += "Length of name: [" + name.length + "]\n";
	text += "To Upper: [" + name.toUpperCase() + "]\n";
	text += "To Lower: [" + name.toLowerCase() + "]\n";
	text += "Concatenation: [" + name.toLowerCase() + " " + name.toUpperCase() +"]\n";
	// find first letters of name elements:

	let fullName = "";
	for (var i = 0; i < name.length; i++) {
		if (i == 0) fullName += name[i];
		if (name[i] == " ") {
			fullName += name[i+1];
		}
	}

	text += "Full Name: [" + fullName.toUpperCase() + "]\n";
	alert(text);
}

function fourthtask() {
	document.write("<table border = 1 cellpadding = 2 style='background-color: lightgrey;'>");
	let dateName = new Array("Год","Месяц","День","Час","Минуты","Секунды");
	let now = new Date();
	let date = new Array(now.getFullYear(),+now.getMonth() + 1,now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds());
	for (var i = 0; i < dateName.length; i++) {
		document.write("<tr><td>"+ dateName[i] +"</td><td>" + date[i] + "</td></tr>");
	}
	document.write("</table>");
}