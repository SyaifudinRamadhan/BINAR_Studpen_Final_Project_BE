const { Carts } = require('../models');

module.exports = {
  create(createArgs) {
    return Carts.create(createArgs);
  },

  findAll() {
    return Carts.findAll();
  },
  delete(id) {
    return Carts.update(
      {
        deleted: true,
      },
      {
        where: { id },
      }
    );
  },
};
