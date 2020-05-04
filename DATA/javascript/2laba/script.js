function alertfunction() {
	alert('Вам пришло новое сообщение!');
}
function promptfunction() {
	var x = prompt('Введите ваше имя', 'тут');
	alert('Добрый день, ' + x);
}
function choosefunction() {
	confirm('Хотите стать Web-дизайнером?') ? alert('Учите CSS и JavaScript') : alert('До встречи!');
}
function math() {
	document.write((5+10) + '<br>');
	document.write("Hello, " + "my name is Zhenia<br>");
	document.write('76' + 0 + '<br>');
	document.write(76 + '0<br>');
	document.write('Результатом сложения числа и строки всегда будет - <span style="color: red; font-family: Arial;"><i>строка</i></span>.');
}
function thirdtask() {
	x = prompt('Введите первое число');
	y = prompt('Введите второе число');
	document.write((x*62)/y+341*4 + '<br>');
	document.write('Отстаток от деления x на y = ' + x%y);
}
function fourthtask() {
	x = prompt('Введите любое число');
	if(x < 20 || x > 40 && x != 15 && x % 5 == 0)
		document.write('верно');
	else
		document.write('ошибка');
}
function fifthtask() {
	A = prompt('Введите число А');
	document.write(A + ' - число А<br>');
	B = prompt('Введите число B');
	document.write(B + ' - число B<br>');
	if (A>B) document.write('A больше B');
	else document.write('A меньше В');
	// A>B ? document.write('A больше B') : document.write('A меньше В');
}
function sixthtask() {
	day = prompt('Введите сегодняшнее число (декабрь)');
	nameOfDay = (day % 7);
	if (day == 7) nameOfDay = 7;
	switch(nameOfDay) {
		case(1):
			document.write('Сегодня воскресенье');
			break;
		case(2):
			document.write('Сегодня понедельник');
			break;
		case(3):
			document.write('Сегодня вторник');
			break;
		case(4):
			document.write('Сегодня среда');
			break;
		case(5):
			document.write('Сегодня четверг');
			break;
		case(6):
			document.write('Сегодня пятница');
			break;
		case(7):
			document.write('Сегодня суббота');
			break;
	}
}