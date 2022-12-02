/**
 * @file contains entry point of controllers api v1 module
 * @author BINAR_C7
 */

// const postController = require("./postController");

const {login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI, verifyRegister, verifyForgotPass, forgotPassword} = require('./user');
const carts = require('./carts');
const {createTicket, updateTicket, filter, getSchedule, deleteTicket} = require('./ticket')

module.exports = {
  login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI, carts, verifyRegister, verifyForgotPass, forgotPassword, createTicket, updateTicket, filter, getSchedule, deleteTicket
};

