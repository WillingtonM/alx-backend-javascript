function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let res = 0;
    switch (type) {
        case 'SUM':
            res = an + bn;
            break;
        case 'SUBTRACT':
            res = an - bn;
            break;
        case 'DIVIDE':
            res = (bn === 0) ? 'Error' : an / bn;
            break;
    }
    return res;
}

module.exports = calculateNumber;
