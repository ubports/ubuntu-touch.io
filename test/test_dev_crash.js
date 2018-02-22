delete require.cache[require.resolve("../server.js")]
delete require.cache[require.resolve("../app.js")]
delete require.cache[require.resolve("../src/routes/index.js")]
var www = require("../server");
var request = require('request');
var expect = require('chai').expect;

console.log(3)

var url = 'http://localhost:2703/crash';
var server;

before((ok) => {
  process.env.NODE_ENV = "development";
  process.env.SIMULATE_CRASH = "true"
  process.env.PORT = 2703
  process.env.CPUS = 1
  server = www.run(ok);
})

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

after((done) => {
  server.close(done);
});
