var c = document.getElementById("myCanvas");

var ctx1 = c.getContext("2d");
ctx1.beginPath();
ctx1.arc(150,150,100,0,2*Math.PI);
ctx1.stroke();

var ctx2 = c.getContext("2d");
ctx2.moveTo(50,150);
ctx2.lineTo(250,150);
ctx2.fillStyle = 'green';
ctx2.fill();
ctx2.stroke();

var ctx3 = c.getContext("2d");
ctx3.beginPath();
ctx3.arc(60,150,10,0,2*Math.PI);
ctx3.fillStyle = 'red';
ctx3.fill();
ctx3.stroke();
