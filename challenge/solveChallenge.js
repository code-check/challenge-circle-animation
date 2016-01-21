var requestId;

$("#btnSolveChallenge1").on("click", function () {
  // BEGIN_CHALLENGE
  animate1();
  //END_CHALLENGE
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

function stopAnimate() {
  // console.log("requestId", requestId);
  if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = undefined;
  }
}

var animate1 = function(){
  stopAnimate();
  drawBaseImage();
  step = step % maxstep;
  var innerCenter = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + innerCenter * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + innerCenter * Math.sin(step * 2 / maxstep * Math.PI);

  i = 0;
  step++;
  challenge.drawCircle(myContext, (centerX + innerCenter * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + innerCenter * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), innerRadius, ' #ffffff');
  requestId = requestAnimationFrame(animate1); 
}

var animate2 = function(){
  stopAnimate();
  drawBaseImage();
  step = step % maxstep;

  // BEGIN_CHALLENGE
  for(var i=0; i < radiusCount * 2; i++) {  
  //END_CHALLENGE
    var x2 = canvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * outerRadius;
    var y2 = canvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * outerRadius;
    challenge.drawLine(myContext, canvasWidth/2, canvasHeight/2, x2, y2, '#ffffff');
  // BEGIN_CHALLENGE
  }
  //END_CHALLENGE

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

  // BEGIN_CHALLENGE
  for(var i=0; i < radiusCount * 2; i++) {  
    var x2 = canvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * outerRadius;
    var y2 = canvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * outerRadius;
    challenge.drawLine(myContext, canvasWidth/2, canvasHeight/2, x2, y2, '#ffffff');
  }
  //END_CHALLENGE

  var innerCenter = outerRadius/2 - innerRadius/2;
  var centerX = myCanvas.width/2 + innerCenter * Math.cos(step * 2 / maxstep * Math.PI);
  var centerY = myCanvas.height/2 + innerCenter * Math.sin(step * 2 / maxstep * Math.PI);

  // BEGIN_CHALLENGE
  for (var i=0; i < radiusCount; i++) {
    challenge.drawCircle(myContext, (centerX + innerCenter * Math.cos((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), (centerY + innerCenter * Math.sin((i * 2 / radiusCount - step * 2 / maxstep) * Math.PI)), innerRadius, ' #ffffff');     
  }
  //END_CHALLENGE

  step++;
  requestId = requestAnimationFrame(animate3);
}

//END_CHALLENGE
