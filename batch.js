var Batch = require('./lib/web3/batch');
var createBatch = function () {
    return new Batch(this);
};

module.exports = createBatch;
