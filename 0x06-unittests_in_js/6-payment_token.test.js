const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    it("getPaymentTokenFromAPI(success), where success == true", function(done) {
		getPaymentTokenFromAPI(true)
			.then((data_res) => {
				expect(data_res).to.have.property('data');
			done();
			});
    });
});
