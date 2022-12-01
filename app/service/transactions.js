const transactionsRepository = require('../repositories/transactions');

module.exports = {
  create(requestBody) {
    return transactionsRepository.create(requestBody);
  },
  async list() {
    try {
      const transactions = await transactionsRepository.findAll();
      return {
        data: transactions,
      };
    } catch (err) {
      throw err;
    }
  },
  update(id, requestBody) {
    return carsRepository.update(id, requestBody);
  },
  delete(id) {
    return Carts.delete({
      where: {
        id,
      },
    });
  },
};
