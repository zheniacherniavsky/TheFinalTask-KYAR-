function task1() {
	let allText = "";
	for(let i = 0; i < document.all.length; i++) {
		let child = document.all[i]
		allText += "id: " + i + "  name:  " + child.nodeName + "<br>";
	}
	document.writeln(allText);
}

function task2() {
	let allText = "";
	for(let i = 0; i < document.body.childNodes.length; i++) {
		let child = document.body.childNodes[i];
		allText += "id: " + i + "  name:  " + child.nodeName + "<br>";
	}

	allText += ("Проверка. body.firstChild: " + document.body.firstChild.nodeName + "<br>");
	allText += ("Проверка. body.lastChild: " + document.body.lastChild.nodeName);
	document.write(allText);
}

function task3() {
	for(let i = 0; i < document.all.length; i++) {
		let child = document.all[i]
		if(child.nodeName == "SPAN") {
			alert(child.nodeName + " найден, содержимое: '" + document.all[i].innerHTML + "' (с помощью all)");
			break;
		}
	}

	alert("SPAN найден, содержимое: '" + document.body.getElementsByTagName("span")[0].innerHTML + "' (с помощью span)")

	alert("SPAN найден, содержимое: '" + document.all[7].innerHTML + "' (с помощью id)")
}

function task4() {
	let startNumber = 4 // стартовое число для начала отсчёта предметов в таблице

	// считаю кол-во предметов
	let table = document.getElementsByTagName("table")[0];
	let subjects = 0
	let sum = 0

	for(let i = 0; i < table.getElementsByClassName("mark").length; i++) {
		let mark = new Number(table.getElementsByClassName("mark")[i].innerHTML)
		sum += mark;
		subjects++
	}
	//alert(sum/subjects)
	let previous = document.getElementsByTagName("span")[1].innerHTML
	document.getElementsByTagName("span")[1].innerHTML = previous + " " + sum/subjects;
}