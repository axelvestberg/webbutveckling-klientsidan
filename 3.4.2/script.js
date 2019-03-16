//Hover bildbyte
$(document).ready(function() {
	var imageOne = function() {
		$(this).attr("src", "../images/harold1.jpg");
	};

	var imageTwo = function() {
		$(this).attr("src", "../images/harold2.jpg");
	};

	$("#bildAttr").hover(imageTwo, imageOne);
});

//Canvas
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
//try two
var grd = c.createLinearGradient(100, 0, 500, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "grey");
// Fill with gradient
c.fillStyle = grd;
c.fillRect(0, 0, canvas.width, canvas.height);

//try one
//text
/*
c.beginPath();
c.moveTo(10, 10);
c.lineTo(10, 50);
c.moveTo(40, 10);
c.lineTo(40, 50);
c.moveTo(10, 30);
c.lineTo(40, 30);
c.font = "57px Helvetica";
c.fillStyle = "black";
c.fillText("E", 45, 50);
c.moveTo(105, 10);
c.lineTo(105, 45);
c.moveTo(90, 40);
c.bezierCurveTo(70, 50, 105, 50, 105, 45);
//sun
c.moveTo(530, 200);
c.arc(470, 50, 75, 0, 2 * Math.PI);
c.moveTo(393, 10);
c.lineTo(350, 0);
c.moveTo(390, 20);
c.lineTo(340, 10);
c.moveTo(386, 30);
c.lineTo(330, 28);
c.moveTo(380, 40);
c.lineTo(335, 45);
c.moveTo(385, 50);
c.lineTo(340, 60);
c.moveTo(385, 60);
c.lineTo(343, 72);
c.moveTo(385, 70);
c.lineTo(340, 85);
c.moveTo(390, 80);
c.lineTo(330, 109);
c.moveTo(393, 90);
c.lineTo(330, 130);
c.moveTo(395, 100);
c.lineTo(350, 135);
c.moveTo(405, 110);
c.lineTo(360, 160);
c.moveTo(410, 115);
c.lineTo(380, 170);
c.moveTo(420, 120);
c.lineTo(390, 180);
c.moveTo(430, 125);
c.lineTo(410, 190);
c.moveTo(440, 130);
c.lineTo(430, 200);
c.moveTo(460, 135);
c.lineTo(450, 210);
c.moveTo(470, 133);
c.lineTo(470, 160);
c.moveTo(480, 130);
c.lineTo(490, 190);
//mountains

c.stroke();
*/
