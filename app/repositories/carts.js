const { carts } = require('../models');

module.exports = {
  create(createArgs) {
    return carts.create(createArgs);
  },

  findAll() {
    return carts.findAll();
  },
};
