// Perintah update dan delete, select user dibawahi oleh middleware getUser
// Perintah read dan create jika membutuhkan akses data user, dilkukan direct ke repo
// Perintah getAllTIkcet untuk umum
const { Sequelize } = require("../models")
const ticketsRepo = require("../repositories/tickets")
const chairRepo = require('../repositories/chairs_available')
const passsengerRepo = require('../repositories/passenger');
const classRepo = require('../repositories/ticket_class');

const deleteTicket = async (req) => {
    try {
        let chairsFree = await chairRepo.findAll({ ticket_id: req.ticket.id, user_id: null })
        if ((chairsFree.length < req.ticket.no_chair) && (new Date(req.ticket.estimated_up_dest) > new Date())) {
            return { error: 403, msg: 'Dilarang menghapus ticket yang sudah ada pembelinya / Sudah terbeli user' }
        }
        let deleted = await ticketsRepo.delete(req.ticket.id)
        return { deleted }
    } catch (error) {
        console.log(error)
        return { error: 400, msg: error ? error : "Bad request server function" }
    }
}

module.exports = {
    async getAllTIkcet(req) {
        try {
            let tickets = JSON.parse(JSON.stringify(await ticketsRepo.findAll({ deleted: false })));
            for (let i = 0; i < tickets.length; i++) {
                let chairsFree = await chairRepo.findAll({ ticket_id: tickets[i].id, user_id: null })
                tickets[i].available = chairsFree
            }
            return { tickets }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    async getTicket(req) {
        try {
            let ticket = JSON.parse(JSON.stringify(await ticketsRepo.find({
                id: req.params.id,
                deleted: false
            })))
            if (!ticket) {
                return { error: 404, msg: "Tiket tidak ditemukan" }
            }
            let chairsFree = await chairRepo.findAll({ ticket_id: ticket.id, user_id: null })
            ticket.available = chairsFree
            return { ticket }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    async create(req) {
        let args = {
            name: req.body.airline,
            from: req.body.from_city,
            dest: req.body.destination,
            date_air: new Date(req.body.date_air),
            price: req.body.price,
            no_chair: req.body.no_chair,
            type: req.body.type_ticket,
            trip_type: '-',
            deleted: false,
            logo: req.body.image,
            estimated_up_dest: new Date(req.body.estimated_up_dest),
            kelas: req.body.kelas
        }

        // Prosws pembuatan data fiel flight_number
        let arrAirline = args.name.split('')
        let flightCodeNumber = `${arrAirline[0]}${arrAirline[arrAirline.length - 1]} ${req.body.flightNumber}`
        flightCodeNumber = flightCodeNumber.toUpperCase()
        try {
            // Proses cek type dan kelas tiket
            let passType = await passsengerRepo.findId(args.type)
            let classType = await classRepo.findId(args.kelas)
            if (passType == null || classType == null) {
                return { error: 404, msg: "Kelas atau jenis penumpang ticket tidak tersedia" }
            }
            console.log("=========================== MUlai Sini 1 ========================",
                {
                    flight_number: flightCodeNumber,
                    from: req.body.from_city,
                    dest: req.body.destination,
                    date_air: new Date(req.body.date_air),
                    estimated_up_dest: new Date(req.body.estimated_up_dest),
                    deleted: false
                });
            let tickets = await ticketsRepo.findAll({
                flight_number: flightCodeNumber,
                from: req.body.from_city,
                dest: req.body.destination,
                date_air: new Date(req.body.date_air),
                estimated_up_dest: new Date(req.body.estimated_up_dest),
                deleted: false
            })
            console.log("=========================== MUlai Sini 2 ========================");
            if (tickets.length > 0) return { error: 403, msg: 'Dilarang ada nomor penerbngan di lebih dari satu bandara ke tujuan sama di waktu yang sama' }
            args.flight_number = flightCodeNumber
            let ticket = await ticketsRepo.create(args)
            if (ticket.no_chair > 0) {
                for (let i = 0; i < ticket.no_chair; i++) {
                    await chairRepo.create({
                        ticket_id: ticket.id,
                        user_id: null,
                        chair_number: i + 1
                    })
                }
            }
            return { ticket }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    async update(req) {
        let args = {
            name: req.body.airline,
            from: req.body.from_city,
            dest: req.body.destination,
            date_air: new Date(req.body.date_air),
            price: req.body.price,
            no_chair: req.body.no_chair,
            type: req.body.type_ticket,
            deleted: false,
            logo: req.body.image,
            estimated_up_dest: new Date(req.body.estimated_up_dest),
            kelas: req.body.kelas
        }

        // Prosws pembuatan data fiel flight_number
        let arrAirline = args.name.split('')
        let flightCodeNumber = `${arrAirline[0]}${arrAirline[arrAirline.length - 1]} ${req.body.flightNumber}`
        flightCodeNumber = flightCodeNumber.toUpperCase()
        try {
            // Proses cek type dan kelas tiket
            let passType = await passsengerRepo.findId(args.type)
            let classType = await classRepo.findId(args.kelas)
            if (passType == null || classType == null) {
                return { error: 404, msg: "Kelas atau jenis penumpang ticket tidak tersedia" }
            }
            let tickets = await ticketsRepo.findAll({
                flight_number: flightCodeNumber,
                from: req.body.from_city,
                dest: req.body.destination,
                date_air: new Date(req.body.date_air),
                estimated_up_dest: new Date(req.body.estimated_up_dest),
                deleted: false
            })
            if (tickets.length > 1) {
                return { error: 403, msg: 'Dilarang ada nomor penerbngan di lebih dari satu bandara ke tujuan sama di waktu yang sama' }
            } else if (tickets.length === 1) {
                if (tickets[0].id !== req.ticket.id) return { error: 403, msg: 'Dilarang ada nomor penerbngan di lebih dari satu bandara ke tujuan sama di waktu yang sama' }
            }
            console.log(args);
            let chairsFree = await chairRepo.findAll({ ticket_id: req.ticket.id, user_id: null })
            if (args.no_chair != req.ticket.no_chair) {
                if (chairsFree.length < (req.ticket.no_chair - args.no_chair)) {
                    return { error: 403, msg: 'Dilarang mengurangi kuota kursi yang sudah ditempati / Kuota baru sudah terlampaui' }
                } else {
                    let abs = Math.abs((req.ticket.no_chair - args.no_chair))
                    let lastNoChair = req.ticket.no_chair
                    if ((req.ticket.no_chair - args.no_chair) > 0) {
                        for (let i = 0; i < abs; i++) {
                            await chairRepo.delete(req.ticket.id, lastNoChair)
                            lastNoChair -= 1
                        }
                    } else if ((req.ticket.no_chair - args.no_chair) < 0) {
                        for (let i = 0; i < abs; i++) {
                            lastNoChair += 1
                            await chairRepo.create({
                                ticket_id: req.ticket.id,
                                user_id: null,
                                chair_number: lastNoChair
                            })
                        }
                    }
                }
            }
            args.flight_number = flightCodeNumber
            let update = await ticketsRepo.update(req.ticket.id, args)
            return { update }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    deleteTicket,
    async filterTicket(req, schedule = false) {
        let data = {}
        let args = {
            from: req.query.from,
            dest: req.query.destination,
            date_air: { [Sequelize.Op.between]: [new Date(req.query.depart+" 00:00"), new Date(req.query.depart+" 23:59")] },
            deleted: false
        }
        // console.log(new Date(req.query.depart+" 00:00"), new Date(req.query.depart+" 23:59"));
        if (!schedule) {
            // Mendapatkan ID class dan ID type
            let passengers = req.query.type_passenger.map(function (x) { return x.toUpperCase(); })
            let ticketClass = await classRepo.find(req.query.kelas.toUpperCase())
            let passType = await passsengerRepo.find({ [Sequelize.Op.in]: passengers })
            console.log(ticketClass, passType);
            if (ticketClass == null || passType == null) return { error: 404, msg: "Kelas / jenis penumpang tidak ditemukan" }
            args.kelas = ticketClass.id
            args.type = passType.id
        }
        try {
            data.go = JSON.parse(JSON.stringify(await ticketsRepo.findAll(args)))
            // data.go[0].available = "fnvjdfnkfnkfgfgj"
            // console.log(data.go[0]);
            // return {res: data.go[0]}
            for (let i = 0; i < data.go.length; i++) {
                let chairsFree = await chairRepo.findAll({ ticket_id: data.go[i].id, user_id: null })
                data.go[i].available = chairsFree
            }
            console.log(data.go);
            if (req.query.return) {
                args.date_air = { [Sequelize.Op.between]: [new Date(req.query.return+" 00:00"), new Date(req.query.return+" 23:59")] }
                data.return = JSON.parse(JSON.stringify(await ticketsRepo.findAll(args)))
                for (let i = 0; i < data.return.length; i++) {
                    let chairsFree = await chairRepo.findAll({ ticket_id: data.return[i].id, user_id: null })
                    data.return[i].available = chairsFree
                }
            }

            return { tickets: data }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}