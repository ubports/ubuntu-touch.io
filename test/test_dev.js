delete require.cache[require.resolve("../server.js")]
var www = require("../server");
var request = require('request');
var expect = require('chai').expect;

var url = 'http://localhost:2700/';
var pages = ["", "apps", "features", "install", "convergence",
             "design", "privacy", "devices", "telegram"]
var server;

console.log(4)

before((ok) => {
  process.env.NODE_ENV = "development";
  process.env.PORT = 2700
  process.env.CPUS = 1
  server = www.run(ok);
})

describe("testing "+process.env.NODE_ENV, function () {
  pages.forEach(function (page) {
    describe("testing: "+url+page, function () {
      it('should return 200', function (done) {
        request.get(url+page, function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
      it('should return 404', function (done) {
        request.post(url+page, function (err, res, body){
          expect(res.statusCode).to.equal(404);
          done();
        });
      });
    });
  });
  describe("testing: "+url+"telegram", function () {
    it('should return 302', function (done) {
      request({
        url: url+"telegram",
        followRedirect: false,
        maxRedirects: 0
      }, function (err, res, body){
        expect(res.statusCode).to.equal(302);
        done();
      });
    });
  });
});

after((done) => {
  server.close(done);
});
