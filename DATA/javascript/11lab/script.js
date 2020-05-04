$("#hover").mouseover(function() {
	$(this).css("color","red");
	$(this).css("cursor","pointer");
});
$("#hover").mouseout(function() {
	$(this).css("color","black");
});
$("#click").mouseover(function() {
	$(this).css("cursor","pointer");
});
$("#click").click(function() {
	$(this).css("font-size","30px");
});
$("#change").click(function() {
	$(this).html("<img src='img1.jpg' width='300px'>");
});
$("#overout").mouseover(function() {
	$(this).css("width","600px");
});
$("#overout").mouseout(function() {
	$(this).css("width","300px");
});
$("#dbclick").dblclick(function() {
	$(this).css("border","1px solid red");
});
