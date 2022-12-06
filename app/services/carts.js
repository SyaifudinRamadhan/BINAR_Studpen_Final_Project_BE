
// ================================================================
// Note :
// update dan delete wajib mengggunakan middleware isLogin dan getCart
// list wajib menggunakan middleware isLogin
// create wajib menggunakan middleware isLogin dan getTicket
// ================================================================
const cartsRepository = require('../repositories/carts');

module.exports = {
  async create(req) {
    // return cartsRepository.create(requestBody);
    console.log(req.body.tickets_id, `========================== ${req.body.tickets_id.length} ============`, Array.isArray(req.body.tickets_id));
    return {carts: req.body.tickets_id}
    // let args = {
    //   user_id: req.user.id,
    //   ticket_id: req.ticket.id,
    //   status: "pending",
    //   deleted: false
    // };
    // try {
    //   const cart = await cartsRepository.create(args);
    //   // Yang belum : Menambhakan notifikasi dengan websocket
    //   return { cart };
    // } catch (err) {
    //   console.log(error)
    //   return { error: 400, msg: error ? error : "Bad request server function" }
    // }
  },
  async update(req) {
    try {
      let update = await cartsRepository.update(req.cart.id, {
        status: "buyed",
        deleted: true
      })
      return { update }
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async list(req) {
    try {
      const carts = await cartsRepository.findAll({
        user_id: req.user.id,
        deleted: false
      });
      return {
        carts
      };
    } catch (err) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async getCart(req){
    try {
      const cart = await cartsRepository.find({
        id: req.params.id,
        user_id: req.user.id,
        deleted: false
      })
      if(!cart){
        return {error: 404, msg: "Cart tidak ditemukan"}
      }
      return {cart}
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async delete(req) {
    try {
      let deleted = await cartsRepository.delete(req.cart.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
};