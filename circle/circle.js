var myCanvas = document.getElementById("myCanvas");
var myContext = myCanvas.getContext('2d');
var canvasWidth = myCanvas.width;
var canvasHeight = myCanvas.height;

var outerRadius = 120;
var innerRadius = 10;

var interval = 60;
var radiusCount = 8; 
var maxstep = 64;
var step = 0;

animate = function() {
  drawBaseImage();
  step = step % maxstep;
  var lol = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + lol * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + lol * Math.sin(step * 2 / maxstep * Math.PI);
  
  for (var i=0; i<radiusCount; i++) {
      drawCircle(myContext, (centerX + lol * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + lol * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), 10, ' #ffffff');     
  }
  step++;
}

function drawCircle(context, x, y, r, c) {
  context.beginPath();
  context.arc(x, y, r, 0, 2*Math.PI);
  context.fillStyle = c;
  context.fill();
}

function drawLine(context, x1, y1, x2, y2, c) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineWidth = 3;
    context.strokeStyle = c;
    context.stroke();
}

function drawBaseImage() {
  drawCircle(myContext, canvasWidth/2, canvasHeight/2, outerRadius, '#069edb');
  for(var i=0; i < radiusCount * 2; i++){
    var x2 = canvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * outerRadius;
    var y2 = canvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * outerRadius;
    drawLine(myContext, canvasWidth/2, canvasHeight/2, x2, y2, 'white');
  }

  // var x1 = canvasWidth/2 ;
  // var y1 = canvasHeight/2;
  
  // var x2 = canvasWidth/2 + 0.92387953251 * outerRadius;
  // var y2 = canvasHeight/2 + 0.38268343236 * outerRadius;

  // drawLine(myContext, x1, y1, x2, y2, 'white');
}

(function() {
    window.setInterval(animate, interval);
})();
