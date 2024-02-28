const express = require('express');

const app = express();
const port = 7865;

app.get('/', (rqst, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (rqst, resp) => {
    resp.send(`Payment methods for cart ${rqst.params.id}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
