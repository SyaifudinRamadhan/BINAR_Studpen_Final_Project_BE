const midTicket = require('../../services/middleware/ticket');

module.exports = {
    createTicketForm(req, res, next) {
        if (
            req.body.airline == undefined ||
            req.body.from_city == undefined ||
            req.body.destination == undefined ||
            req.body.date_air == undefined ||
            req.body.price == undefined ||
            req.body.no_chair == undefined ||
            req.body.type_ticket == undefined ||
            req.file == undefined ||
            req.body.estimated_up_dest == undefined ||
            req.body.kelas == undefined ||
            req.body.flightNumber == undefined ||
            req.body.image == undefined
        ) {
            console.log(req.body);
            res.status(403).json({ errors: ["Semua field tambah tiket wajib diisi"] })
            return
        }
        next()
    },
    updateTicketForm(req, res, next) {
        if (
            req.body.airline == undefined ||
            req.body.from_city == undefined ||
            req.body.destination == undefined ||
            req.body.date_air == undefined ||
            req.body.price == undefined ||
            req.body.no_chair == undefined ||
            req.body.type_ticket == undefined ||
            req.body.estimated_up_dest == undefined ||
            req.body.kelas == undefined ||
            req.body.flightNumber == undefined
        ) {
            res.status(403).json({ errors: ["Semua field update tiket wajib diisi"] })
            return
        }
        next()
    },
    filterForm(req, res, next) {
        if (req.query.from == undefined ||
            req.query.destination == undefined ||
            req.query.depart == undefined ||
            req.query.kelas == undefined ||
            req.query.type_passenger == undefined) {
            res.status(403).json({ errors: ["Semua field pencarian tiket wajib diisi"] })
            return
        }


        if(Array.isArray(req.query.type_passenger)){
            if(req.query.type_passenger.length == 0){
                res.status(403).json({ errors: ["Semua field pencarian tiket wajib diisi"] })
                return
            }
        }else{
            res.status(403).json({ errors: ["Field jenis penumpang hanya menerima data Array"] })
            return
        }

        if(req.query.return !== undefined){
            if(req.query.return < req.query.depart){
                res.status(403).json({ errors: ["Field return / tanggal pulang tidak boleh kurang dari tanggal berangkat"] })
                return
            }
        }
        next()
    },
    scheduleForm(req, res, next) {
        if (req.query.from == undefined ||
            req.query.destination == undefined ||
            req.query.depart == undefined ) {
            res.status(403).json({ errors: ["Semua field pencarian tiket wajib diisi"] })
            return
        }
        next()
    },
    getTicket(req, res, next) {
        midTicket.getTicket(req).then(data => {
            if (data.error) {
                res.status(data.error).json({ errors: [data.msg] })
                return
            } else {
                next()
            }
        }).catch(err => {
            res.status(400).json({ errors: [err] })
            return
        })
    }
}