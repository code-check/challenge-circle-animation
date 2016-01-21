'use strict';
// var Test = function(){
//   var testCircle = 0;
//   var testLine = 0;

//   this.testAnimateCircle = function() {
//     testCircle += 1;
//   }

//   this.circleCnt = function() {
//     return testCircle;
//   }
//   this.lineCnt = function() {
//     return testLine;
//   }

//   this.testAnimateLine = function() {
//     testLine += 1;
//   }
// }

var Test = (function () {
  var
    _circle = 0,
    _line   = 0;

  function Test () {  }

  Test.prototype.circleCnt = function circleCnt () {
    return _circle;
  };
  Test.prototype.lineCnt = function lineCnt () {
    return _line;
  };
  Test.prototype.testAnimateLine = function testAnimateLine () {
    _line += 1;
  };
  Test.prototype.testAnimateCircle = function testAnimateCircle () {
    _circle += 1;
  };
  return Test;
})();
