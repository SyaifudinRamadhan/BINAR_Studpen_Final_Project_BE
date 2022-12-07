const { Carts } = require('../models');
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
  destroy(args){
    return Carts.destroy(
      {
        where: args
      }
    );
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