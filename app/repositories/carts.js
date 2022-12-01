const { Carts } = require('../models');
const { where } = require('sequelize');
module.exports = {
  create(createArgs) {
    return Carts.create(createArgs);
  },

  findAll() {
    return Carts.findAll();
  },
  // delete(id) {
  //   return Carts.update(
  //     {
  //       deleted: true,
  //     },
  //     {
  //       where: { id },
  //     }
  //   );
  // },
  update(id, args) {
    return Carts.update(args, {
      where: {
        id,
      },
    });
  },
  delete(id) {
    return Carts.update(
      {
        deleted: true,
      },
      {
        where: {
          id,
        },
      }
    );
  },
};
