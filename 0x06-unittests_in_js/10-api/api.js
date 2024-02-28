const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (rqst, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (rqst, resp) => {
    resp.send(`Payment methods for cart ${rqst.params.id}`);
});

app.get('/available_payments', (rqst, resp) => {
    resp.set("Content-Type", "application/json");
    const payMethods = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    }
    resp.send(payMethods);
});

app.post('/login', (rqst, resp) => {
    const usrName = rqst.body.userName;
    if (usrName) {
        resp.send(`Welcome ${usrName}`);
    } else {
        resp.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

