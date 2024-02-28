const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
	const API_URL = 'http://localhost:7865';
    const options = {
	url: `${API_URL}/`,
	method: "GET"
    }
    it("Checks status code", function(done) {
	request(options, function(er, resp, body) {
	    expect(resp.statusCode).to.equal(200);
	    done();
	});
    });
    it("Checks content", function(done) {
	request(options, function(er, resp, body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function() {
    it("Checks status code for url", function(done) {
	request.get(`${API_URL}/cart/12`, function(er, resp, body) {
	    expect(resp.statusCode).to.equal(200);
	    done();
	});
    });
    it("Checks content for url", function(done) {
		request.get(`${API_URL}/cart/12`, function(er, resp, body) {
			expect(body).to.contain("Payment methods for cart 12");
			done();
		});
    });
    it("Checks status code for inurl", function(done) {
		request.get(`${API_URL}/cart/kim`, function(er, resp, body) {
			expect(resp.statusCode).to.equal(404);
			done();
		});
    });
});
