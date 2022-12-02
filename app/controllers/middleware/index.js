const { uploadHandler } = require('./fileHandler');
const { login, register, forgotPass, isLogin, isAdmin, getUser, updateUser, verifyRegister, verifyResetPass } = require('./user');
const { createTicketForm, updateTicketForm, filterForm, scheduleForm, getTicket } = require('./ticket');

module.exports = {
    login, register, forgotPass, isLogin, isAdmin, getUser, updateUser, uploadHandler, verifyRegister, forgotPass, verifyResetPass, createTicketForm, updateTicketForm, filterForm, scheduleForm, getTicket
}