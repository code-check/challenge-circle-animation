// BEGIN_CHALLENGE
var requestId;

function stopAnimate() {
  if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = undefined;
  }
}

function animate1(){
  stopAnimate();
  drawBaseImage();
  step = step % maxstep;
  var innerCenter = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + innerCenter * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + innerCenter * Math.sin(step * 2 / maxstep * Math.PI);

  i = 0;
  challenge.drawCircle(myContext, (centerX + innerCenter * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + innerCenter * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), innerRadius, ' #ffffff');
  step++;
  requestId = requestAnimationFrame(animate1);
}

var animate2 = function(){
  stopAnimate();
  drawBaseImage();
  step = step % maxstep;

  for(var i=0; i < radiusCount * 2; i++) {  
    var x2 = canvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * outerRadius;
    var y2 = canvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * outerRadius;
    challenge.drawLine(myContext, canvasWidth/2, canvasHeight/2, x2, y2, '#ffffff');
  }

  var innerCenter = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + innerCenter * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + innerCenter * Math.sin(step * 2 / maxstep * Math.PI);

  var i = 0;
  challenge.drawCircle(myContext, (centerX + innerCenter * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + innerCenter * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), innerRadius, ' #ffffff');     

  step++;
  requestId = requestAnimationFrame(animate2);
}

var animate3 = function(){
  stopAnimate();
  drawBaseImage();
  step = step % maxstep;

  for(var i=0; i < radiusCount * 2; i++) {  
    var x2 = canvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * outerRadius;
    var y2 = canvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * outerRadius;
    challenge.drawLine(myContext, canvasWidth/2, canvasHeight/2, x2, y2, '#ffffff');
  }

  var innerCenter = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + innerCenter * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + innerCenter * Math.sin(step * 2 / maxstep * Math.PI);

  var i = 0;
  for (var i=0; i < radiusCount*2; i++) {
    challenge.drawCircle(myContext, (centerX + innerCenter * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + innerCenter * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), innerRadius, ' #ffffff');     
  }
  step++;
  requestId = requestAnimationFrame(animate3);
}

$("#btnSolveChallenge1").on("click", function () {
  animate1();
});

$("#btnSolveChallenge2").on("click", function () {
  animate2();
});

$("#btnSolveChallenge3").on("click", function () {
  animate3();
});

$("#btnSolveStop").on("click", function () {
  stopAnimate();
});
// END_CHALLENGE