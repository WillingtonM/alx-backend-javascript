const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

const API_URL = '${API_URL}';

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const optns = {
        url: API_URL,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/12', () => {
    it('Responds with 200 and id 12 in msg', (done) => {
      const optns = {
        url: `${API_URL}/cart/12`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/1', () => {
    it('Responds with 200 and id 1 in msg', (done) => {
      const optns = {
        url: `${API_URL}/cart/1`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });
  });

  describe('GET /cart/123', () => {
    it('Responds with 200 and id 12 in msg', (done) => {
      const optns = {
        url: `${API_URL}/cart/123`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });
  });

  describe('GET /cart/a12', () => {
    it('Responds with 404', (done) => {
      const optns = {
        url: `${API_URL}/cart/a12`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/a12b', () => {
    it('Responds with 404', (done) => {
      const optns = {
        url: `${API_URL}/cart/a12b`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/12b', () => {
    it('Responds with 404', (done) => {
      const optns = {
        url: `${API_URL}/cart/12b`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/hello', () => {
    it('Responds with 404', (done) => {
      const optns = {
        url: `${API_URL}/cart/hello`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with 404', (done) => {
      const optns = {
        url: `${API_URL}/cart/`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments JSON string', () => {
    it('Responds with 200 and correct JSON string', (done) => {
      const optns = {
        url: `${API_URL}/available_payments`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', (done) => {
      const optns = {
        url: `${API_URL}/available_payments`,
        method: 'GET',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Betty', (done) => {
      const optns = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', (done) => {
      const optns = {
        url: `${API_URL}/login`,
        method: 'POST',
      };

      request(optns, function (er, resp, body) {
        expect(resp.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });
});
