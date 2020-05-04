function firsttask() {
	function Group(groupNumber, specialty, studentCount) {
		this.groupNumber = groupNumber;
		this.specialty = specialty;
		this.studentCount = studentCount;

		document.write("</br>Была создана группа с номером " + groupNumber + " специальности " + specialty + " с количеством студентов: " + studentCount);

		this.addStudents = function addStudents(count) {
			this.studentCount += count;
			document.write("</br>В группу " + this.groupNumber + " был(о) добавлен(о) " + count + " студентов.");
		}
		this.removeStudents = function removeStudents(count) {
			this.studentCount -= count;
			document.write("</br>В группe " + this.groupNumber + " был(о) удален(о) " + count + " студентов.");
		}
	}

	let firstGroup = new Group(1,"ПОИТ",25);
	let secondGroup = new Group(2,"ИСиТ",31);
	let thirdGroup = new Group(3,"ПОИБМС",15);
	let fourthGroup = new Group(4,"ПОИТ",21);

	fourthGroup.addStudents(6);
	secondGroup.removeStudents(6);

	document.write("</br>"+firstGroup.studentCount+" - кол-во студентов в 1 группе.");
	document.write("</br>"+secondGroup.studentCount+" - кол-во студентов во 2 группе.");
	document.write("</br>"+thirdGroup.studentCount+" - кол-во студентов в 3 группе.");
	document.write("</br>"+fourthGroup.studentCount+" - кол-во студентов в 4 группе.");
}

function secondtask() {
	let student = new Object();
	let studentNumbers = 3;

	// dataBase:

	student[0] = {
		firstname: "Евгений",
		secondname: "Чернявский",
		physics: 4,
		math: 6,
		computerScience: 9
	}

	student[1] = {
		firstname: "Антон",
		secondname: "Антонович",
		physics: 9,
		math: 6,
		computerScience: 6
	}

	student[2] = {
		firstname: "Андрей",
		secondname: "Андреевич",
		physics: 4,
		math: 9,
		computerScience: 10
	}

	// вывод информации

	for (var i = 0; i < studentNumbers; i++) {
		document.write(student[i].firstname+" "+student[i].secondname+" | <b>Средний бал: </b>"+((student[i].physics+student[i].math+student[i].computerScience)/3).toFixed(2));
		document.write("<br>=========================================<br>");
	}

	document.write("<br><br><br>")

	for (var i = 0; i < studentNumbers; i++) {
		student[i].dormitory = "Да"; // добавляем новое свойство объекту
		document.write(student[i].firstname+" "+student[i].secondname+" | <b>Живёт в общежитии: </b>"+student[i].dormitory);
		document.write("<br>=========================================<br>");
	}
}

function thirdtask() {
	let math = new Array("pow","round","floor","sline"); // pow round floor sline
	let array = new Array("pop","push","shift","sort"); // pop push shift sort
	let dateName = new Array("Год","Месяц","День","Час","Минуты","Секунды");

// Delete
	document.write("<br>=DELETE=<br>");
	for (var i = 0; i < math.length; i++) {
		document.write(math[i] + " ");
	}
	document.write("<br>");
	delete math[2];
	for (var i = 0; i < math.length; i++) {
		document.write(math[i] + " ");
	}

// In
	document.write("<br><br>=IN=<br>");
	document.write(2 in array);       // true
	document.write("<br>");


	let student = new Object();
	student[0] = {
		firstname: "Евгений",
		secondname: "Чернявский",
		physics: 4,
		math: 6,
		computerScience: 9
	}
	document.write('math' in student[0]);     // true
	document.write("<br>");


	function Group(groupNumber, specialty, studentCount) {
		this.groupNumber = groupNumber;
		this.specialty = specialty;
		this.studentCount = studentCount;
	}
	let firstGroup = new Group(1,"ПОИТ",25);
	document.write('helloworld' in firstGroup);     // false
	document.write("<br>");

// Instanceof
	document.write("<br>=Instanceof=<br>");
	let typeArray = Array();
	document.write(typeArray instanceof Array); document.write("<br>");

	let typeString = new String("str");
	document.write(typeString instanceof String); document.write("<br>");

	let typeObj = new Object();
	document.write(typeObj instanceof Object); document.write("<br>");

// TypeOf
	document.write("<br>=TypeOf=<br>");
	function returnFive() {
		return 5
	}
	document.write(typeof returnFive); document.write("<br>");
	document.write(typeof dateName); document.write("<br>");
	document.write(typeof student); document.write("<br>");
	document.write(typeof student[0]['firstname']); document.write("<br>");
	document.write(typeof student[0]['secondname']); document.write("<br>");
	document.write(typeof student[0]['math']); document.write("<br>");
	document.write(typeof student[0]['physics']); document.write("<br>");
	document.write(typeof student[0]['computerScience']); document.write("<br>");
	document.write(typeof firstGroup['groupNumber']); document.write("<br>");
	document.write(typeof firstGroup['specialty']); document.write("<br>");
	document.write(typeof firstGroup['studentCount']); document.write("<br>");
}