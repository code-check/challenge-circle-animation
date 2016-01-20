"use strict";

var env = require("jsdom").env,
    assert = require("chai").assert,
    express = require("express"),
    app = express();

describe("Test", function () {
  var listener, $, window;
  before(function (done) {
    this.timeout(5000);
    app.use(express.static("./circle"));

    listener = app.listen(0, function () {
      env({
        url: "http://127.0.0.1:" + listener.address().port + "/circle.html",
        // url: "http://localhost:8080/circle/circle.html",
        features: {
          FetchExternalResources: ['script'],
          ProcessExternalResources: ['script']
        },
        done: function (errors, w) {
          window = w;
          $ = require("jquery")(window);
          w.animate1;
          // w.stopAnimate();
          // w.check();
          // console.log($("body").html());
          $("#btnSolveChallenge1").click();
          console.log(w.requestId);
          done();
        }
      });
    });
  });

  it(": check if challenge1 is resolved ", function(done) {
    // console.log(window.animate1());
    // console.log(window.requestId);
    console.log(window.step);
    // assert.notEqual(undefined, window.requestId);
    done();
  });

  // it(": check if challenge2 is resolved ", function(done) {
  //   console.log(window.drawCircleCount);
  //   assert.notEqual(0, (window.drawCircleCount));
  //   done();
  // });

});

