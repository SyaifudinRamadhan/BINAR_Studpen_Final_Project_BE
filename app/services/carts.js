
// ================================================================
// Note :
// update dan delete wajib mengggunakan middleware isLogin dan getCart
// list wajib menggunakan middleware isLogin
// create wajib menggunakan middleware isLogin dan getTicket
// ================================================================
const cartsRepository = require('../repositories/carts');
const chairRepo = require('../repositories/chairs_available');
const transaction = require('../repositories/transactions')

module.exports = {
  async create(req) {
    let tickets = req.body.tickets_id
    if(tickets == undefined) return { error: 403, msg: "Wajib meninputkan array ticket ID" }
    console.log(req.user);
    let argsTrx = {
      user_id: req.user.id,
      price: 0,
      count: req.body.tickets_id.length,
      token_trx: "",
      give_to: req.user.email,
      status: "pending",
      deleted: false
    }
    try {
      let trx = await transaction.create(argsTrx)
      for (let i = 0; i < tickets.length; i++) {
        let args = {
          trx_id: trx.id,
          ticket_id: tickets[i],
          status: "pending",
          deleted: false
        }
        await cartsRepository.create(args)
      }
      tickets.length > 1 ? trx.trip_type = "round-trip" : trx.trip_type = "one-way"
      return { wait_list: trx }
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async list(req) {
    try {
      const trx = JSON.parse(JSON.stringify(await transaction.findAll({
        user_id: req.user.id,
        deleted: false,
        status: "pending"
      })));
      for (let i = 0; i < trx.length; i++) {
        trx[i].carts.length > 1 ? trx[i].trip_type = "round-trip" : trx[i].trip_type = "one-way"
        for (let j = 0; j < trx[i].carts.length; j++) {
          let chairs = await chairRepo.findAll({ticket_id: trx[i].carts[j].ticket.id, user_id: null})
          trx[i].carts[j].ticket.available = chairs
        }
      }
      return {
        wait_list: trx
      };
    } catch (err) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async getCart(req) {
    try {
      const trx = JSON.parse(JSON.stringify(await transaction.find({
        id: req.params.id,
        user_id: req.user.id,
        deleted: false,
        status: "pending"
      })))
      if (!trx) {
        return { error: 404, msg: "Cart tidak ditemukan" }
      }
      trx.carts.length > 1 ? trx.trip_type = "round-trip" : trx.trip_type = "one-way"
      for (let j = 0; j < trx.carts.length; j++) {
        let chairs = await chairRepo.findAll({ticket_id: trx.carts[j].ticket.id, user_id: null})
        trx.carts[j].ticket.available = chairs
      }
      return { wait_list: trx }
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async delete(req) {
    try {
      console.log(req.wait_list);
      await cartsRepository.destroy({trx_id: req.wait_list.id})
      let deleted = await transaction.destroy(req.wait_list.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
};