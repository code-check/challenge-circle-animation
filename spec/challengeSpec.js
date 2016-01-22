"use strict";
var env = require("jsdom").env,
    assert = require("chai").assert,
    express = require("express"),
    app = express();

describe("Test1", function () {
  var listener, $, window;

  before(function (done) {
    this.timeout(5000);
    app.use(express.static("./circle"));
    // app.use(express.static("./challenge"));

    listener = app.listen(0, function () {
      env({
        // url: "http://127.0.0.1:" + listener.address().port + "/circle.html",
        url: "http://localhost:8080/circle/circle.html",
        features: {
          FetchExternalResources: ['script'],
          ProcessExternalResources: ['script']
        },
        done: function (errors, w) {
          console.log("listener.address().port", listener.address().port);
          window = w;
          $ = require("jquery")(window);
          // console.log($("body").html());
          done();
        }
      });
    });

  });

  it(": check if challenge1 is resolved ", function(done) {
    $("#btnSolveChallenge1").click();
    assert.equal(4, window.testObj.lineCnt());          //(animate() + animate1() i.e 2 + 2)
    assert.equal(4, window.testObj.circleCnt());        //(animate() + animate1() i.e 2 + 2)
    done();
  });

  it(": check if challenge2 is resolved ", function(done) {
    $("#btnSolveChallenge2").click();
    assert.equal(22, window.testObj.lineCnt());         //(animate() + animate1() + animate2() i.e 2 + 2 + 2 + 16(for loop))
    assert.equal(6, window.testObj.circleCnt());        //(animate() + animate1() + animate2() i.e 2 + 2 + 2) 
    done();
  });

  it(": check if challenge3 is resolved ", function(done) {
    $("#btnSolveChallenge3").click();
    assert.equal(40, window.testObj.lineCnt());         //(animate() + animate1() + animate2() + animate3() i.e 2 + 2 + 2 + 16(for loop) + 2 + 16(for loop))
    assert.equal(15, window.testObj.circleCnt());       //(animate() + animate1() + animate2() + animate3() i.e 2 + 2 + 2 + 1 + 8(for loop)) 
    done();
  });

});


