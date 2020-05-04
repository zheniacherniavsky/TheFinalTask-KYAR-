//$(document).ready({

	function pixel(color, x, y) {
		let pixel = "<div "
		pixel += "style='"
		pixel += "position: absolute;"
		pixel += "background-color: " + color + ";"
		pixel += "left: " + x +"px;"
		pixel += "top: " + y + "px;"
		pixel += "width: 2px;"
		pixel += "height: 2px;'></div>"

		return pixel;
	}

	function createGraf() {
		let functions = document.getElementsByName("f");
		let function_;
		for(let i = 0; i < functions.length; i++) {
			if(functions[i].checked) function_ = functions[i].value;
		}

		let color = document.getElementsByTagName("select")[0].value;

		document.write("<img src='axis.jpg'>")

		//if(function_ == "sin") {
			for(let x = 5; x <= 42; x += 0.01) {
				let y = Math.sin(x)*15;
				document.write(pixel("red",x*10-4,y+232));
			}
		//}

		//if(function_ == "cos") {
			for(let x = 6; x <= 42; x += 0.01) {
				let y = Math.cos(x)*15;
				document.write(pixel("green",x*10-4,y+232));
			}
		//}

		//if(function_ == "par") {
			for(let x = -40; x <= 40; x += 0.01) {
				let y = -x*x*5;
				document.write(pixel("lightblue",x*10+232,y+232));
			}
		//}

		//if(function_ == "gip") {
			for(let x = -10; x <= 40; x += 0.01) {
				let y = 15/x;
				if(x*10+232 < 300)
				document.write(pixel("orange",x*20+232,y+232));
			}
		//}
	}

	document.write("<input type='radio' name='f' value='sin' disabled> Синус")
	document.write("<input type='radio' name='f' value='cos' disabled> Косинус")
	document.write("<input type='radio' name='f' value='par' disabled> Парабола")
	document.write("<input type='radio' name='f' value='gip' disabled> Гипербола (всё включено)")

	document.write("<br><br><select>")
	document.write("<option>red</option>")
	document.write("<option>green</option>")
	document.write("<option>blue</option>")
	document.write("<option>orange</option>")
	document.write("</select>")

	document.write("  <input type='submit' value='Построить' onclick='createGraf()'>")
//});