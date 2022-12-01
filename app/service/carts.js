const cartsRepository = require('../repositories/carts');

module.exports = {
  async create(req) {
    // return cartsRepository.create(requestBody);
    try {
      const carts = await cartsRepository.create(req);
      return {
        // deleted: false,
        data: carts,
      };
    } catch (err) {
      throw err;
    }
  },

  async list() {
    try {
      const carts = await cartsRepository.findAll();
      return {
        data: carts,
        // id: carts.id,
        // user_id: carts.user_id,
        // ticket_id: carts.ticket_id,
        // status: carts.status,
        // deleted: false,
      };
    } catch (err) {
      throw err;
    }
  },
  async delete(id) {
    try {
      let deleted = await cartsRepository.delete(id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  // async delete(id) {
  //   try {
  //     let deleted = await cartsRepository.delete(id);
  //     return { deleted };
  //   } catch (error) {
  //     console.log(error);
  //     return { error: 400, msg: error ? error : 'Bad request server function' };
  //   }
  // },
};
