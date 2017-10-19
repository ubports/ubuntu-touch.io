delete require.cache[require.resolve("../bin/www")]
delete require.cache[require.resolve("../app.js")]
delete require.cache[require.resolve("../src/routes/index.js")]
process.env.NODE_ENV = "production";
process.env.SIMULATE_CRASH = "true"
process.env.PORT = 2702
var www = require("../bin/www");
var request = require('request');
var expect = require('chai').expect;

var url = 'http://localhost:2702/crash';

describe("testing "+process.env.NODE_ENV, function () {
    describe("testing: "+url, function () {
      it('should return 500', function (done) {
        request.get(url, function (err, res, body){
          expect(res.statusCode).to.equal(500);
          done();
        });
      });
    });
});
