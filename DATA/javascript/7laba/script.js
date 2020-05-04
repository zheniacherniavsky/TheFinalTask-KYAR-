function printForm() {
	// formTexts
	let fTextarea = document.getElementsByTagName("textarea")[0].value;
	let fLastname = document.getElementById("lastname").value;

	// специальность
	let special = document.getElementsByTagName("select")[0].value;

	// курс
	let courses = document.getElementsByName("course");
	var course;
	for (var i = 0; i < courses.length; i++) {
		if(courses[i].checked) course = courses[i].value;
	}

	// предметы
	let fSubjects = document.getElementsByName("subjects");
	let subjects = "<ul>";
	for (var i = 0; i < fSubjects.length; i++) {
		if(fSubjects[i].checked) subjects += "<li>" + fSubjects[i].value + "</li>";
	}
	subjects += "</ul>";

	// consts
	let fTextareaMargin = 100;
	let fLastnameMargin = 30;

	let printText = "<span style = 'margin-left: " + fTextareaMargin + "px'>" + fTextarea + "</span>";
	printText += "<br>";
	printText += "<span style = 'margin-left : " + fLastnameMargin + "px'>Студент " + fLastname;
	printText += " специальность " + special;
	printText += " курс " + course + " должен сдавать следующие предметы:";
	printText += subjects;
	document.writeln(printText)
}

function edit() {
	let selectForm = document.getElementsByName("subj");

	let fSubjects = document.getElementsByName("subjects");
	for (var i = 0, j = 0; i < fSubjects.length; i++) {
		if(fSubjects[i].checked) {
			selectForm[j].innerHTML = fSubjects[i].value;
			j++;
		}
	}
}

function resetSub() {
	let sub = document.getElementsByName("subj");
	for(i = 0; i < sub.length; i++) sub[i].innerHTML = "";
}