const { uploadHandler } = require('./fileHandler');
const { login, register, forgotPass, isLogin, isAdmin, getUser, updateUser } = require('./user');

module.exports = {
    login, register, forgotPass, isLogin, isAdmin, getUser, updateUser, uploadHandler
}