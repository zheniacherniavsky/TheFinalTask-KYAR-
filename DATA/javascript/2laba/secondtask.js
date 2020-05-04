function table() {
	a = prompt("Введите число а (длина столбца)");
	b = prompt("Введите число б (длина строки)");
	document.write("<table border='1' cellpadding='10' align='center' bgcolor='lightblue'>");
	for(i = 1; i <= a; i++) {
		document.write("<tr>");
		for(j = 1; j <= b; j++) {
			document.write("<td><b><span style='font-family: Arial;'>"+i*j+"</span></b></td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
};

function table2() {
	a = prompt("Enter A");
	b = prompt("Enter B");
	a = Number.parseFloat(a);
	b = Number.parseFloat(b);
	document.write("<table border = '1'>");
	document.write("<tr>");
	document.write("<td>Радиус</td>");
	document.write("<td>Площадь круга</td>");
	document.write("<td>Длина окружности</td>");
	document.write("</tr>");
	while (a <= b) {
		document.write("<tr>");
		document.write("<td>"+a.toFixed(2)+"</td>");
		document.write("<td>"+Math.round(Math.PI * a*a)+"</td>");
		document.write("<td>"+Math.round(2 * Math.PI * a)+"</td>");
		document.write("</tr>");
		a += 0.3;
	};
	document.write("</table>");
}
