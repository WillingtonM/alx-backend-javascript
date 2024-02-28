const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

const API_URL = '${API_URL}';

describe("Index page", function() {
    const optns = {
		url: `${API_URL}/`,
		method: "GET"
    }
    it("check status code", function(done) {
		request(optns, function(er, resp, body) {
			expect(resp.statusCode).to.equal(200);
			done();
		});
    });
    it("check content", function(done) {
		request(optns, function(er, resp, body) {
			expect(body).to.equal("Welcome to the payment system");
			done();
		});
    });
});

describe("Cart page", function() {
    it("check status code for url", function(done) {
		request.get(`${API_URL}/cart/12`, function(er, resp, body) {
			expect(resp.statusCode).to.equal(200);
			done();
		});
    });
    it("check content for url", function(done) {
		request.get(`${API_URL}/cart/12`, function(er, resp, body) {
			expect(body).to.equal("Payment methods for cart 12");
			done();
		});
    });
    it("check status code for inurl", function(done) {
		request.get(`${API_URL}/cart/kim`, function(er, resp, body) {
			expect(resp.statusCode).to.equal(404);
			done();
		});
    });
});

describe("Available_payments page", function() {
    it("check status for url", function() {
		request.get(`${API_URL}/available_payments`, (er, resp, body) => {
			if (er) {
				expect(resp.statusCode).to.not.equal(200);
			} else {
				expect(resp.statusCode).to.equal(200);
			}
		});
    });

    it("check body content for url", function() {
		const optn = {json: true};
		const payLoad = {
			payment_methods: {
				credit_cards: true,
				paypal: false
			}
		}
		request.get(`${API_URL}/available_payments`, optn, (er, resp, body) => {
			if (er) {
				expect(resp.statusCode).to.not.equal(200);
			} else {
				expect(body).to.deep.equal(payLoad);
			}
		});
    });
});

describe("Login", function() {
    it("check status code for request that's sent properly", function(done) {
		const optn = {
			url: `${API_URL}/login`,
			json: true,
			body: { userName: 'JOE' }
		};
		request.post(optn, function(er, resp, body) {
			expect(resp.statusCode).to.equal(200);
			done();
		});
    });
    it("check content for request that's sent properly", function(done) {
		const opts = {
			url: `${API_URL}/login`,
			json: true,
			body: { userName: 'JOE' }
		};
		request.post(opts, function(er, resp, body) {
			if (er) {
				expect(resp.statusCode).to.not.equal(200);
			} else {
				expect(body).to.contain('Welcome JOE');
			}
			done();
		});
    });
    it("check status code for request that's not sent properly", function(done) {
		const optn = {
			url: `${API_URL}/login`,
			json: true,
			body: { userName: 'JOE' }
		};
		request.post(optn, function(er, resp, body) {
			expect(resp.statusCode).to.equal(404);
			done();
		});
    });
});
