const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check status code", function(done) {
		request(options, function(err, resp, body) {
			expect(resp.statusCode).to.equal(200);
			done();
		});
    });
    it("check content", function(done) {
		request(options, function(err, resp, body) {
			expect(body).to.contain("Welcome to the payment system");
			done();
		});
    });
    it("check content length", function(done) {
		request(options, function(err, resp, body) {
			expect(resp.headers['content-length']).to.equal('29');
			done();
		});
    });
});
