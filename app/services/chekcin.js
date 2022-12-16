const { Sequelize } = require("../models");
const checkinRepo = require("../repositories/checkin");
const ticketRepo = require("../repositories/tickets");
const trxRepo = require("../repositories/transactions");
const models = require("../models");

module.exports = {
  async checkinUserAuto(req) {
    let flightNumber = req.body.flight_number;
    // let tickets =   await ticketRepo.findAll({
    //     flight_number: flightNumber,
    //     date_air: {[Sequelize.Op.gte]: new Date()}
    // })
    let now = new Date();
    try {
      let trxs = await trxRepo.findAllRelation({
        where: {
          user_id: req.user.id,
          status: "finished",
        },
        include: [
          {
            model: models.Carts,
            as: "carts",
            where: { status: "finished" },
            include: {
              model: models.Tickets,
              as: "ticket",
              where: {
                flight_number: flightNumber,
                date_air: {
                  [Sequelize.Op.between]: [
                    new Date(),
                    new Date(`${now.toLocaleDateString()} 23:59`),
                  ],
                },
              },
              include: [{all: true, nested: true}]
            },
          },
          {
            model: models.Checkin,
            as: "checkins",
          },
        ],
      });
      console.log(
        {
          flight_number: flightNumber,
          date_air: {
            [Sequelize.Op.between]: [
              new Date(),
              new Date(`${now.toLocaleDateString()} 23:59`),
            ],
          },
          now: now.toLocaleDateString(),
        },
        trxs
      );
      // return {trxs}
      let psCheckins = [];
      for (let x = 0; x < trxs.length; x++) {
        if (trxs[x].checkins.length == 0) {
          let ps = checkinRepo.create({
            trx_id: trxs[x].id,
            status: "checkined",
          });
          // console.log(ps);
          psCheckins.push(ps);
        } else {
          let ps = checkinRepo.getDetail({
            trx_id: trxs[x].id,
          });
          psCheckins.push(ps);
        }
      }
      trxs = JSON.parse(JSON.stringify(trxs));
      let index = 0;
      await Promise.all(psCheckins)
        .then((res) => {
          res = JSON.parse(JSON.stringify(res))[0];
          // console.log(res);
          // console.log(index);
          trxs[index].checkins = res;
          index++;
        })
        .catch((error) => {
          console.log(error);
          return { error: 400, msg: error };
        });

      if (trxs.length == 0) {
        return {
          error: 404,
          msg: "Tiket yang sudah dibooking tidak dapat ditemukan / anda sudah terlambat. Silahkan checkin secara manual",
        };
      }
      return { trxs };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  async checkinManual(req) {
    let ticketId = req.body.ticket_id;
    let orderId = req.body.order_id;

    if((ticketId === undefined || orderId === undefined) || (ticketId === "" || orderId === "")){
        return {error: 403, msg: "Semua field wajib diisi"}
    }

    try {
      let trxs = await trxRepo.findAllRelation({
        where: {
          order_id: orderId,
          user_id: req.user.id,
          status: "finished",
        },
        include: [
          {
            model: models.Carts,
            as: "carts",
            where: {
                ticket_id: ticketId
            },
            include: {
              model: models.Tickets,
              as: "ticket",
              where: {
                id: ticketId,
              },
              include: [{all: true, nested: true}]
            }
          },
          {
            model: models.Checkin,
            as: "checkins",
          },
        ],
      });

      let psCheckins = [];
      for (let x = 0; x < trxs.length; x++) {
        if (trxs[x].checkins.length == 0) {
          let ps = checkinRepo.create({
            trx_id: trxs[x].id,
            status: "checkined",
          });
          // console.log(ps);
          psCheckins.push(ps);
        } else {
          let ps = checkinRepo.getDetail({
            trx_id: trxs[x].id,
          });
          psCheckins.push(ps);
        }
      }
      trxs = JSON.parse(JSON.stringify(trxs));
      let index = 0;
      await Promise.all(psCheckins)
        .then((res) => {
          res = JSON.parse(JSON.stringify(res))[0];
          // console.log(res);
          // console.log(index);
          trxs[index].checkins = res;
          index++;
        })
        .catch((error) => {
          console.log(error);
          return { error: 400, msg: error };
        });

      if (trxs.length == 0) {
        return {
          error: 404,
          msg: "Tiket yang sudah dibooking tidak dapat ditemukan / anda sudah terlambat. Silahkan checkin secara manual",
        };
      }
      return { trxs };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
};
