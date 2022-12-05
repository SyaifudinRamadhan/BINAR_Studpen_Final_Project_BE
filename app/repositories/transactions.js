const { Transaction } = require('../models');

module.exports = {
  create(createArgs) {
    return Transactions.create(createArgs);
  },
  findAll(args) {
    return Transactions.findAll({ where: args, include: [{ all: true, nested: true }] });
  },
  find(argsWhere) {
    console.log(argsWhere);
    return Tickets.findOne({ where: argsWhere, include: [{ all: true, nested: true }] })
  },
  update(id, args) {
    return Transaction.update(args, {
      where: {
        id,
      },
    });
  },
  delete(id) {
    return Transaction.update({
      deleted: true
    }, {
      where: {
        id,
      }
    });
  },
};