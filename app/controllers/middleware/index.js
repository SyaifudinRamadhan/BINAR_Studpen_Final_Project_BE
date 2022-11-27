const { uploadHandler } = require('./fileHandler');
const { login, register, forgotPass, isLogin, isAdmin, getUser, updateUser, verifyRegister, verifyResetPass } = require('./user');

module.exports = {
    login, register, forgotPass, isLogin, isAdmin, getUser, updateUser, uploadHandler, verifyRegister, forgotPass, verifyResetPass
}