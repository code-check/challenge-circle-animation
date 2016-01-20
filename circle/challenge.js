var challenge1Canvas = document.getElementById("challenge1");
var challenge1Context = challenge1Canvas.getContext('2d');
var challenge1CanvasWidth = challenge1Canvas.width;
var challenge1CanvasHeight = challenge1Canvas.height;

var challenge1OuterRadius = 60;
var challenge1InnerRadius = 7;

var challeng1RadiusCount = 8;
var challenge1MaxStep = 360;
var challenge1Step = 0;

function drawBaseImage1(myContext, challenge1CanvasWidth, challenge1CanvasHeight, challenge1OuterRadius) {
  challenge.drawCircle(myContext, challenge1CanvasWidth/2, challenge1CanvasHeight/2, challenge1OuterRadius, '#069edb');
  var i =0;
  while(i <= 8) {  
    var x2 = challenge1CanvasWidth/2 + Math.cos(i / radiusCount * Math.PI) * challenge1OuterRadius;
    var y2 = challenge1CanvasWidth/2  + Math.sin(i / radiusCount * Math.PI) * challenge1OuterRadius;
    challenge.drawLine(myContext, challenge1CanvasWidth/2, challenge1CanvasHeight/2, x2, y2, 'white');
    i += 8;
  }
}

function animateChallenge1(){
  drawBaseImage1(challenge1Context, challenge1CanvasWidth, challenge1CanvasHeight, challenge1OuterRadius);
  challenge1Step = challenge1Step % challenge1MaxStep;
  var challenge1InnerCenter = challenge1OuterRadius/2 - challenge1InnerRadius/2;
  var centerX = challenge1CanvasWidth/2 + challenge1InnerCenter * Math.cos(challenge1Step * 2 / challenge1MaxStep * Math.PI);
  var centerY = challenge1CanvasHeight/2 + challenge1InnerCenter * Math.sin(challenge1Step * 2 / challenge1MaxStep * Math.PI);

  var i = 0;
// challenge1InnerRadius
  challenge.drawCircle(challenge1Context, (centerX + challenge1InnerCenter * Math.cos((i * 2 / challeng1RadiusCount - challenge1Step * 2 / challenge1MaxStep) * Math.PI)), (centerY + challenge1InnerCenter * Math.sin((i * 2 / challeng1RadiusCount - challenge1Step * 2 / challenge1MaxStep) * Math.PI)), challenge1InnerRadius, '#ffffff');
  challenge1Step++;
  requestAnimationFrame(animateChallenge1);
}

var challenge2Canvas = document.getElementById("challenge2");
var challenge2Context = challenge2Canvas.getContext('2d');

function animateChallenge2(){
  drawBaseImage1(challenge2Context, challenge1CanvasWidth, challenge1CanvasHeight, challenge1OuterRadius);
  challenge1Step = challenge1Step % challenge1MaxStep;
  var challenge1InnerCenter = challenge1OuterRadius/2 - challenge1InnerRadius/2;
  var centerX = challenge1CanvasWidth/2 + challenge1InnerCenter * Math.cos(challenge1Step * 2 / challenge1MaxStep * Math.PI);
  var centerY = challenge1CanvasHeight/2 + challenge1InnerCenter * Math.sin(challenge1Step * 2 / challenge1MaxStep * Math.PI);

  /*Draw lines aka diameters on basCircle */
  for(var i=0; i < challeng1RadiusCount * 2; i++){
    var x2 = challenge1CanvasWidth/2 + Math.cos(i / challeng1RadiusCount * Math.PI) * challenge1OuterRadius;
    var y2 = challenge1CanvasWidth/2  + Math.sin(i / challeng1RadiusCount * Math.PI) * challenge1OuterRadius;
    challenge.drawLine(challenge2Context, challenge1CanvasWidth/2, challenge1CanvasHeight/2, x2, y2, '#ffffff');
  }
  
  challenge.drawCircle(challenge2Context, (centerX + challenge1InnerCenter * Math.cos((i * 2 / challeng1RadiusCount - challenge1Step * 2 / challenge1MaxStep) * Math.PI)), (centerY + challenge1InnerCenter * Math.sin((i * 2 / challeng1RadiusCount - challenge1Step * 2 / challenge1MaxStep) * Math.PI)), challenge1InnerRadius, '#ffffff');

  challenge1Step++;
  requestAnimationFrame(animateChallenge2);
}

var challenge3Canvas = document.getElementById("challenge3");
var challenge3Context = challenge3Canvas.getContext('2d');

function animateChallenge3(){
  drawBaseImage1(challenge3Context, challenge1CanvasWidth, challenge1CanvasHeight, challenge1OuterRadius);
  challenge1Step = challenge1Step % challenge1MaxStep;
  var challenge1InnerCenter = challenge1OuterRadius/2 - challenge1InnerRadius/2;
  var centerX = challenge1CanvasWidth/2 + challenge1InnerCenter * Math.cos(challenge1Step * 2 / challenge1MaxStep * Math.PI);
  var centerY = challenge1CanvasHeight/2 + challenge1InnerCenter * Math.sin(challenge1Step * 2 / challenge1MaxStep * Math.PI);

  /*Draw lines aka diameters on baseCircle */
  for(var i=0; i < challeng1RadiusCount * 2; i++){
    var x2 = challenge1CanvasWidth/2 + Math.cos(i / challeng1RadiusCount * Math.PI) * challenge1OuterRadius;
    var y2 = challenge1CanvasWidth/2  + Math.sin(i / challeng1RadiusCount * Math.PI) * challenge1OuterRadius;
    challenge.drawLine(challenge3Context, challenge1CanvasWidth/2, challenge1CanvasHeight/2, x2, y2, '#ffffff');
  }

  /*Draw inner circles on baseImage */
  for(var i=0; i < challeng1RadiusCount * 2; i++){
    challenge.drawCircle(challenge3Context, (centerX + challenge1InnerCenter * Math.cos((i * 2 / challeng1RadiusCount - challenge1Step * 2 / challenge1MaxStep) * Math.PI)), (centerY + challenge1InnerCenter * Math.sin((i * 2 / challeng1RadiusCount - challenge1Step * 2 / challenge1MaxStep) * Math.PI)), challenge1InnerRadius, '#ffffff');
  } 
  challenge1Step++;
  requestAnimationFrame(animateChallenge3);
}

(function() {
  animateChallenge1();
  animateChallenge2();
  animateChallenge3();
})();
