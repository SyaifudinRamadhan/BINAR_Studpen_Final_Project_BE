const { uploadHandler } = require('./fileHandler');
const auths = require('./user');
const tickets = require('./ticket');
const carts = require('./cart')
const trx = require('./transaction');

module.exports = {
   auths , uploadHandler, tickets, carts, trx
}