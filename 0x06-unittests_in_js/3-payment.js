
const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const cost_result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${cost_result}`);
}

module.exports = sendPaymentRequestToApi;
