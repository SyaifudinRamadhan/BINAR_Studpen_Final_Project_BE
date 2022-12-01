/**
 * @file contains entry point of controllers api v1 module
 * @author BINAR_C7
 */

// const postController = require("./postController");

const { login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI } = require('./user');
const carts = require('./carts');
// const { deleteCart } = require('./carts');

const transactions = require('./transactions');

module.exports = {
  login,
  loginRegGoogle,
  register,
  updateProfile,
  deleteUser,
  whoAmI,
  // deleteCart,
  carts,
  transactions,
};
