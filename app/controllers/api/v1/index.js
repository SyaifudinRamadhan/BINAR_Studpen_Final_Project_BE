/**
 * @file contains entry point of controllers api v1 module
 * @author BINAR_C7
 */

// const postController = require("./postController");

const auths = require('./user');
const carts = require('./carts')
const transactions = require('./transaction')
const tickets = require('./ticket')
const addOn = require('./addon')
const checkin = require('./checkin')

module.exports = {auths, carts, transactions, tickets, addOn, checkin
};

