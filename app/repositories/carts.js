const { Carts } = require('../models');
const { where } = require('sequelize');
module.exports = {
  create(createArgs) {
    return Carts.create(createArgs);
  },

  findAll(args) {
    return Carts.findAll({
      where: args,
      include: [{ all: true, nested: true }]
    });
  },
  find(argsWhere) {
    console.log(argsWhere);
    return Carts.findOne({ where: argsWhere, include: [{ all: true, nested: true }] })
  },
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