const { Transactions } = require('../models');

module.exports = {
  create(createArgs) {
    return Transactions.create(createArgs);
  },
  findAll(args) {
    return Transactions.findAll({ where: args, include: [{ all: true, nested: true }] });
  },
  find(argsWhere) {
    console.log(argsWhere);
    return Transactions.findOne({ where: argsWhere, include: [{ all: true, nested: true }] })
  },
  update(id, args) {
    return Transactions.update(args, {
      where: {
        id,
      },
    });
  },
  delete(id) {
    return Transactions.update({
      deleted: true
    }, {
      where: {
        id,
      }
    });
  },
  destroy(id) {
    return Transactions.destroy({
      where: {
        id,
      }
    });
  },
  findAllRelation(argsRel){
    return Transactions.findAll(argsRel)
  }
};