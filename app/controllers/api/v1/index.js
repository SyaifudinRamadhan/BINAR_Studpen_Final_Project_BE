/**
 * @file contains entry point of controllers api v1 module
 * @author BINAR_C7
 */

// const postController = require("./postController");
const {login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI} = require('./user');

module.exports = {
  login, loginRegGoogle, register, updateProfile, deleteUser, whoAmI
};
