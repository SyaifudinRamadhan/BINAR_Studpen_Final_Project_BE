const { Sequelize } = require('../../models')
const chairsAvailablle = require('../../repositories/chairs_available')
const ticketRepo = require('../../repositories/tickets')
const trxRepo = require('../../repositories/transactions')

module.exports = {
    async transactionCreate(req) {
        if (req.body.chairs_number == undefined) {
            return { error: 403, msg: "Wajib menginputkan nomor kursi" }
        }

        if (req.body.tickets_id == undefined && req.body.wait_list_id == undefined) {
            return { error: 403, msg: "Wajib menginputkan array ticket ID ataupun id waiting list" }
        }else if(req.body.tickets_id != undefined){
            if(Array.isArray(req.body.chairs_number) == false || Array.isArray(req.body.tickets_id) == false){
                return { error: 403, msg: "Data chairs_number dan tickets_id wajib berupa array" }
            }

            if(req.body.chairs_number.length != req.body.tickets_id.length){
                return { error: 403, msg: "Data chairs_number dan tickets_id wajib memiliki panjang array yang sama" }
            }

            for (let i = 0; i < req.body.tickets_id.length; i++) {
                let ticket = await ticketRepo.findAll({id: req.body.tickets_id[i]})
                let chair = await chairsAvailablle.findAll({ticket_id: req.body.tickets_id[i], chair_number: req.body.chairs_number[i], user_id: null})

                if(ticket.length == 0 || chair.length == 0){
                    return { error: 404, msg: "Tiket atau nomor kursi yang di pilh tidak tersedia atau sudah penuh" }
                }
            }
        }else if(req.body.wait_list_id != undefined){
            if(Array.isArray(req.body.chairs_number) == false ){
                return { error: 403, msg: "Data chairs_number wajib berupa array" }
            }
            let trx = await trxRepo.findAll({id: req.body.wait_list_id, user_id: req.user.id})
            if(trx.length == 0){
                return { error: 404, msg: "Data transaksi / waiting list yang dipilih tidak tersedia" }
            }

            if(trx[0].count != req.body.chairs_number.length){
                return { error: 403, msg: "Banyak kursi yang dipillih tidak sessuai dengan jumlah tiket yang sudah dipilih" }
            }

            let carts = trx[0].carts
            for (let i = 0; i < carts.length; i++) {
                let chair = await chairsAvailablle.findAll({ticket_id: carts[i].ticket.id, chair_number: req.body.chairs_number[i], user_id: null})
                if(chair.length == 0){
                    return { error: 404, msg: "Nomor kursi yang di pilh sudah penuh" }
                }
            }

        }
        return {success: true}
    },
    async getTrx(req){
        try {
            const trx = JSON.parse(JSON.stringify(await trxRepo.find({
                id: req.params.id,
                user_id: req.user.id,
                deleted: false,
                status: {[Sequelize.Op.ne]: "pending"}
            })))
            if (!trx) {
                return { error: 404, msg: "Transaksi tidak ditemukan" }
            }
            
            req.trx = trx
            return { trx }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}