# circle-animation-challenge
- Interactive Challenge in javascript/html/css.
#### Minimal Setup 
- Download the git repository
- Install codecheck globally
```bash 
npm install -g codecheck
```
- From terminal goto the path where you downloaded the repository(i.e here **codecheck.yml** file should be present) and run ***codecheck*** command.
```bash
codecheck
```
- ##### Now you can solve the challenge locally 
    - Open another terminal run ***http-server*** 
    - On browser goto "http://localhost:8080/circle/circle.html" you will see the challenge

#### Note:
- ##### Pass the [tests](spec/challengeSpec.js)  in sequence.
- ***HTML5 <canvas>*** tag is used to draw the graphics.
- ***requestAnimationFrame*** is used for animation.
- If you really want to dig into Mathematical Equations used to draw circles refer [Parametric equation for a circle](https://en.wikipedia.org/wiki/Circle#Equations)