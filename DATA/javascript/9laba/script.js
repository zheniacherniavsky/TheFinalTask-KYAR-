let img = document.getElementById("img");

img.onmousedown = function(e) {
	img.style.position = 'absolute';
	moveAt(e);
	document.body.appendChild(img);

	img.style.zIndex = 1000;  // выше всех элементов

	function moveAt(e) {
		img.style.left = e.clientX - img.offsetWidth / 2 + 'px';
		img.style.top = e.clientY - img.offsetHeight / 2 + 'px';
	}

	document.onmousemove = function(e){
		moveAt(e);
	}

	img.onmouseup = function() {
	    document.onmousemove = null;
	    img.onmouseup = null;
	}

	img.ondragstart = function() {
		return false;
	};
}

// second
function second() {
	document.write('<img id="img1" src="img1.jpg" width="300px"><br>');
	let img1 = document.getElementById("img1");

	img1.style.position = 'absolute';

	var x = 0;

	function moveOnLine() {
		if(x > 300) clearInterval(interval);
		x++;
		img1.style.left = x + 'px';
	}

	let interval = setInterval(moveOnLine,20);
}

// third
function third() {
	document.write('<img id="img2" src="img1.jpg" width="300px"><br>');
	let img2 = document.getElementById("img2");

	img2.style.position = 'absolute';
	let top = 200;

	img2.style.top = top + 'px';

	let x = 0;
	let y = 0;

	function changeMove() {
		if(x < 0) clearInterval(interval);
		x -= 0.1;
		img2.style.left = x + 'px';
		y = top + Math.sin(x)*100;
		img2.style.top = y + 'px';
	}

	function moveOnLine() {
		if(x > 100) {
			clearInterval(interval);
			interval = setInterval(changeMove, 10);
		}
		x += 0.1;
		img2.style.left = x + 'px';
		y = top + Math.sin(x)*200;
		img2.style.top = y + 'px';
	}

	let interval = setInterval(moveOnLine,10);
}


// fourth

document.getElementById('nav').onmouseover = function(event){
//отслеживает нахождение мыши внутри блока
	var target = event.target;
//отслеживаем клик
	if (target.className == 'menu-item'){
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display='block';
		//массив, содержащий ложное меню
	}
}

document.onmouseover=function(event){
	var target = event.target;
	console.log(event.target);
	if (target.className!='menu-item' &&
	target.className!='submenu'){
		closeMenu();
	}
}

function closeMenu(){
	//получение всех элементов подменю в блоке nav, присваивание
	var menu = document.getElementById('nav');
	var subm=document.getElementsByClassName('submenu');
	for (var i=0; i <subm.length; i++){
		subm[i].style.transition ="1s";
		subm[i].style.display ="none";
	}
}
