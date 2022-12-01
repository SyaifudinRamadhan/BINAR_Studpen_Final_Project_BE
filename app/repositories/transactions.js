const { UPDATE } = require('sequelize/types/query-types');
const { Transaction } = require('../models');

module.exports = {
  create(createArgs) {
    return Transactions.create(createArgs);
  },
  findAll() {
    return Transactions.findAll();
  },
  update(id, args) {
    return Transaction.update(args, {
      where: {
        id,
      },
    });
  },
  delete(id) {
    return Cars.destroy({
      where: {
        id,
      },
    });
  },
};
