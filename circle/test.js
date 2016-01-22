'use strict';

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
    if( _line <= 100 )
      _line += 1;
    else _line = 0;
  };
  Test.prototype.testAnimateCircle = function testAnimateCircle () {
    if( _circle <= 100 )
      _circle += 1;
    else _circle = 0 ;
  };
  return Test;
})();
