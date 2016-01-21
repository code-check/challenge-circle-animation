var myCanvas = document.getElementById("myCanvas");
var myContext = myCanvas.getContext('2d');
var canvasWidth = myCanvas.width;
var canvasHeight = myCanvas.height;

var outerRadius = 120;
var innerRadius = 10;

var radiusCount = 8; /* radiusCount will be equal to number of smaller balls */
var maxstep = 164;   /* number of steps the innercircle should take to move */
var step = 0;

var testObj = new Test();
$("#btnHint1").on("click", function () {
  var e = document.getElementById('hint1');
  if (e.style.display == 'none')
    e.style.display = 'block';
  else 
    e.style.display = 'none';
});

$("#btnHint2").on("click", function () {
  var e = document.getElementById('hint2');
  if (e.style.display == 'none')
    e.style.display = 'block';
  else 
    e.style.display = 'none';
});

$("#btnHint3").on("click", function () {
  var e = document.getElementById('hint3');
  if (e.style.display == 'none')
    e.style.display = 'block';
  else 
    e.style.display = 'none';
});

$("#btnHint4").on("click", function () {
  var e = document.getElementById('hint4');
  if (e.style.display == 'none')
    e.style.display = 'block';
  else 
    e.style.display = 'none';
});

var animate = function(){
  drawBaseImage();
  step = step % maxstep;
  var innerCenter = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + innerCenter * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + innerCenter * Math.sin(step * 2 / maxstep * Math.PI);

  var i = 0;
  challenge.drawCircle(myContext, (centerX + innerCenter * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + innerCenter * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), innerRadius, ' #ffffff');     
}

challenge = {
  drawCircle: function(context, x, y, r, c){
    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI);
    context.fillStyle = c;
    context.fill();
    if(testObj.circleCnt() < 23) {
    testObj.testAnimateCircle(); }
    console.log(testObj.circleCnt());
  },
  drawLine: function(context, x1, y1, x2, y2, c) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineWidth = 2;
    context.strokeStyle = c;
    context.stroke();
    testObj.testAnimateLine();
  }
}

function checkIfSuccess() {
  if (testObj.testCircle === 3)
    return true;
}

function drawBaseImage() {
  challenge.drawCircle(myContext, canvasWidth/2, canvasHeight/2, outerRadius, '#069edb');
  var i =0;
  while(i <= 8) {  
    var x2 = canvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * outerRadius;
    var y2 = canvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * outerRadius;
    challenge.drawLine(myContext, canvasWidth/2, canvasHeight/2, x2, y2, 'white');
    i += 8;
  }
}

(function() {
  animate();
})();
