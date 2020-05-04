function task1changeColor() {
	event.srcElement.style.color = 'red'
}

function task2changeSize() {
	event.srcElement.style.fontSize = '60px'
}

// task3

let img_id = 1;
let imagesCount = 3;

let img = "<img id='image' onclick='task3()' src='img"+img_id+".jpg' width = '300px' height = '200px'>";
document.writeln(img);

function task3() {
	if(img_id >= imagesCount) img_id = 0;
	img_id += 1;
	document.getElementById("image").src="img"+img_id+".jpg";
}

function task4() {
	document.getElementById("pic").innerHTML = "<img src='img1.jpg' width = '80px' height = '60px'>";
}

function task5_1() {
	event.srcElement.style.width = '600px'
}

function task5_2() {
	event.srcElement.style.width = '300px'
}

function task6() {
	document.getElementById("border").style.padding = '5px';
	document.getElementById("border").style.border = '1px solid red';
}