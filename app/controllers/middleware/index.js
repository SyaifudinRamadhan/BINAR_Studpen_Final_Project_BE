const { uploadHandler } = require('./fileHandler');
const auths = require('./user');
const tickets = require('./ticket');
const carts = require('./cart')

module.exports = {
   auths , uploadHandler, tickets, carts
}