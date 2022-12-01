/**
 * @file contains entry point of controllers api v1 module
 * @author BINAR_C7
 */

// const postController = require("./postController");

<<<<<<< HEAD
const { login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI } = require('./user');
=======
const {login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI, verifyRegister, verifyForgotPass, forgotPassword} = require('./user');
>>>>>>> 6bc0ca43e1dbe096be2b7064140786925837dbf5
const carts = require('./carts');
// const { deleteCart } = require('./carts');

const transactions = require('./transactions');

module.exports = {
<<<<<<< HEAD
  login,
  loginRegGoogle,
  register,
  updateProfile,
  deleteUser,
  whoAmI,
  // deleteCart,
  carts,
  transactions,
=======
  login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI, carts, verifyRegister, verifyForgotPass, forgotPassword
>>>>>>> 6bc0ca43e1dbe096be2b7064140786925837dbf5
};
