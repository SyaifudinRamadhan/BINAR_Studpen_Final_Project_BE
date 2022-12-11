const transactionsRepository = require('../repositories/transactions');
const cartsRepo = require('../repositories/carts');
const chairsAvailablle = require('../repositories/chairs_available')
const cartService = require('./carts');
const dotenv = require('dotenv')
const midtransClient = require('midtrans-client');
const { Sequelize } = require('../models');
const { default: axios } = require('axios');

dotenv.config();

const update = async (userID = null) => {
  // Function ini adalah unit untuk melakukan check data transaksi secara berkala dalam kurun waktu 1 jam sekali (Node crom)
  let args = {
    status: "pending-payment",
    deleted: false,
    order_id: { [Sequelize.Op.ne]: null }
  }
  if (userID != null) {
    args.user_id = userID
  }
  let allTrxPending = await transactionsRepository.findAll(args)
  let configHead = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(process.env.SERVER_KEY + ":")}`
    },
    timeout: 60000, //optional
    httpsAgent: new https.Agent({ keepAlive: true }),
  }

  for (let i = 0; i < allTrxPending.length; i++) {
    let lastCheckout = new Date(allTrxPending[i].updatedAt)
    let now = new Date()
    let url = `${process.env.MID_BASE_URL}/v2/${allTrxPending[i].order_id}/status`
    await axios.get(url, configHead, {}).then(async res => {
      console.log(res.data);
      if (res.data.status_code == 200) {
        await transactionsRepository.update(allTrxPending[i].id, { status: 'finished' })
        for (let j = 0; j < allTrxPending[i].carts.length; j++) {
          await cartsRepo.update(allTrxPending[i].carts[j].id, { status: "finished" })
        }
      } else if (res.data.status_code == 202) {
        await transactionsRepository.update(allTrxPending[i].id, { status: 'expired' })
        for (let j = 0; j < allTrxPending[i].carts.length; j++) {
          await cartsRepo.update(allTrxPending[i].carts[j].id, { status: "expired" })
          // Mengahpus kursi yang sudah di booking
          await chairsAvailablle.update2({ ticket_id: allTrxPending[i].carts[j].ticket.id, user_id: allTrxPending[i].user_id, chair_number: allTrxPending[i].carts[j].chair_number }, { user_id: null })
        }
      } else {
        let diff = parseFloat(((now - lastCheckout) / 1000) / 3600)
        console.log(diff, lastCheckout.toUTCString(), now.toUTCString());
        if (diff >= 24) {
          await transactionsRepository.update(allTrxPending[i].id, { status: 'expired' })
          for (let j = 0; j < allTrxPending[i].carts.length; j++) {
            await cartsRepo.update(allTrxPending[i].carts[j].id, { status: "expired" })
            // Mengahpus kursi yang sudah di booking
            // --------- INI BUGNYA. SELECT KURANG SPESIFIK ------------------------
            await chairsAvailablle.update2({ ticket_id: allTrxPending[i].carts[j].ticket.id, user_id: allTrxPending[i].user_id, chair_number: allTrxPending[i].carts[j].chair_number }, { user_id: null })
          }
        }
      }
    }).catch(err => {
      console.log(err);
    })

  }
}

module.exports = {
  async create(req) {
    // Periksa di middleware tickets_id => array dan chairs_number => Array
    let wait_list = undefined
    let chairs_number = undefined
    try {
      if (req.body.chairs_number == undefined) return { error: 403, msg: "Wajib menginputkan nomor kursi" }
      chairs_number = req.body.chairs_number
      if (req.body.tickets_id == undefined && req.body.wait_list_id == undefined) return { error: 403, msg: "Wajib menginputkan array ticket ID ataupun id waiting list" }
      else if (req.body.tickets_id != undefined) {
        let waitList = await cartService.create(req)
        if (waitList.error) {
          return waitList
        }
        console.log(waitList.wait_list);
        wait_list = await transactionsRepository.find({ id: waitList.wait_list.id, user_id: req.user.id })
        if (!wait_list) {
          return { error: 404, msg: "Data waiting list tujuan tidak ditemukan" }
        }
      } else if (req.body.wait_list_id != undefined) {
        wait_list = await transactionsRepository.find({ id: req.body.wait_list_id, user_id: req.user.id })
        if (!wait_list) {
          return { error: 404, msg: "Data waiting list tujuan tidak ditemukan" }
        }
      }

      let rnadomOrderID = Date.now()
      let totalPay = 0
      // let chairsTmp = []
      for (let i = 0; i < wait_list.count; i++) {
        totalPay += wait_list.carts[i].ticket.price
        let chairs = await chairsAvailablle.findAll({ ticket_id: wait_list.carts[i].ticket.id, user_id: null, chair_number: chairs_number[i] })
        // chairsTmp.push(chairs)
        // if(chairs.length == 0){
        //   return { error: 404, msg: "Kuota tiket sudah penuh" }
        // }
        await chairsAvailablle.update(chairs[0].id, {
          user_id: req.user.id
        })
      }

      // for (let i = 0; i < wait_list.count; i++) {
      //   await chairsAvailablle.update(chairsTmp[i][0].id, {
      //     user_id: req.user.id
      //   })
      // }

      console.log({
        isProduction: (process.env.isProduction === true),
        serverKey: process.env.SERVER_KEY,
        clientKey: process.env.CLIENT_KEY
      });
      // Create Snap API instance
      let snap = new midtransClient.Snap({
        isProduction: (process.env.isProduction === true),
        serverKey: process.env.SERVER_KEY,
        clientKey: process.env.CLIENT_KEY
      });

      let parameter = {
        "transaction_details": {
          "order_id": rnadomOrderID,
          "gross_amount": totalPay
        }, "credit_card": {
          "secure": true
        }
      };

      let trxSnap = await snap.createTransaction(parameter)

      let transactionToken = trxSnap.token;
      console.log('transactionToken:', transactionToken);

      for (let i = 0; i < wait_list.count; i++) {
        await cartsRepo.update(wait_list.carts[i].id, {
          status: 'pending-payment',
          chair_number: chairs_number[i]
        })
      }

      await transactionsRepository.update(wait_list.id, {
        price: totalPay,
        token_trx: transactionToken,
        status: 'pending-payment',
        order_id: rnadomOrderID
      })

      let final = await transactionsRepository.find({ id: wait_list.id, user_id: req.user.id })

      return { trx: final }
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async getTrx(req) {
    await update(req.user.id)
    try {
      let args = {
        id: req.params.id,
        deleted: false,
        status: { [Sequelize.Op.ne]: "pending" }
      }
      if (req.user.access_level != 0) {
        args.user_id = req.user.id
      }

      const trx = JSON.parse(JSON.stringify(await transactionsRepository.find(args)))

      if (!trx) {
        return { error: 404, msg: "Transaksi tidak ditemukan" }
      }
      for (let j = 0; j < trx.carts.length; j++) {
        let chair = await chairsAvailablle.find({ ticket_id: trx.carts[j].ticket.id, user_id: req.user.id, chair_number: trx.carts[j].chair_number })
        trx.carts[j].ticket.chair = chair
      }
      return { transaction: trx }
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async list(req) {
    await update(req.user.id)
    try {
      const trx = JSON.parse(JSON.stringify(await transactionsRepository.findAll({
        user_id: req.user.id,
        deleted: false,
        status: { [Sequelize.Op.ne]: "pending" }
      })));
      for (let i = 0; i < trx.length; i++) {
        for (let j = 0; j < trx[i].carts.length; j++) {
          let chair = await chairsAvailablle.find({ ticket_id: trx[i].carts[j].ticket.id, user_id: req.user.id, chair_number: trx[i].carts[j].chair_number })
          trx[i].carts[j].ticket.chair = chair
        }
      }
      return {
        transaction: trx
      };
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  async getAll(req) {
    try {
      const trx = JSON.parse(JSON.stringify(await transactionsRepository.findAll({
        deleted: false,
        status: { [Sequelize.Op.ne]: "pending" }
      })));
      for (let i = 0; i < trx.length; i++) {
        for (let j = 0; j < trx[i].carts.length; j++) {
          let chair = await chairsAvailablle.find({ ticket_id: trx[i].carts[j].ticket.id, user_id: trx[i].user.id, chair_number: trx[i].carts[j].chair_number })
          trx[i].carts[j].ticket.chair = chair
        }
      }
      return {
        transaction: trx
      };
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  },
  update,
  async delete(req) {
    try {
      let deleted = undefined
      if (req.trx.status == "expired") {
        await cartsRepo.destroy({ trx_id: req.trx.id })
        deleted = await transactionsRepository.destroy(req.trx.id)
      } else if (req.trx.status == 'pending-payment') {
        // Bisa disebut fingsi membatalkan pembayaran
        for (let j = 0; j < req.trx.carts.length; j++) {
          // Mengahpus kursi yang sudah di booking
          await chairsAvailablle.update2({ ticket_id: req.trx.carts[j].ticket.id, user_id: req.user.id, chair_number: req.trx.carts[j].chair_number }, { user_id: null })
        }
        await cartsRepo.destroy({ trx_id: req.trx.id })
        deleted = await transactionsRepository.destroy(req.trx.id)
      } else if (req.status == 'finished') {
        await cartsRepo.delete2({ trx_id: req.trx.id })
        deleted = await transactionsRepository.delete(req.trx.id)
      }
      return {
        deleted
      }
    } catch (error) {
      console.log(error)
      return { error: 400, msg: error ? error : "Bad request server function" }
    }
  }
};