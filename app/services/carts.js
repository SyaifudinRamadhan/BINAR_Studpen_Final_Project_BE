const cartsRepository = require('../repositories/carts');

module.exports = {
  create(requestBody) {
    return cartsRepository.create(requestBody);
  },

  async list() {
    try {
      const carts = await cartsRepository.findAll();
      return {
        data: carts,
      };
    } catch (err) {
      throw err;
    }
  },
  async deleteCart(req) {
    try {
      let deleted = await cartsRepository.delete(req.carts.id);
      return { deleted };
    } catch (err) {
      throw err;
    }
  },
};
