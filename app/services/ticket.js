// Perintah update dan delete, select user dibawahi oleh middleware getUser
// Perintah read dan create jika membutuhkan akses data user, dilkukan direct ke repo
// Perintah getAllTIkcet untuk umum
const { Sequelize } = require("../models")
const ticketsRepo = require("../repositories/tickets")

const deleteTicket = async (req) => {
    try {
        let deleted = await ticketsRepo.delete(req.ticket.id)
        return { deleted }
    } catch (error) {
        console.log(error)
        return { error: 400, msg: error ? error : "Bad request server function" }
    }
}

module.exports = {
    async getAllTIkcet(req){
        try {
            let tickets = await ticketsRepo.findAll({deleted: false});
            return {tickets}
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    async getTicket(req){
        try {
            let ticket = await ticketsRepo.find({
                id: req.params.id,
                deleted: false
            })
            if(!ticket){
                return {error: 404, msg: "Tiket tidak ditemukan"}
            }
            return {ticket}
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
            date_air: req.body.date_air,
            price: req.body.price,
            no_chair: req.body.no_chair,
            type: req.body.type_ticket,
            trip_type: '-',
            deleted: false,
            logo: req.body.image,
            estimated_up_dest: req.body.estimated_up_dest,
            kelas: req.body.kelas
        }
        // Prosws pembuatan data fiel flight_number
        let arrAirline = args.name.split('')
        let flightCodeNumber = `${arrAirline[0]}${arrAirline[arrAirline.length - 1]} ${req.body.flightNumber}`
        flightCodeNumber = flightCodeNumber.toUpperCase()
        try {
            let tickets = await ticketsRepo.findAll({
                flight_number: flightCodeNumber,
                from: req.body.from_city,
                dest: req.body.destination,
                date_air: req.body.date_air,
                estimated_up_dest: req.body.estimated_up_dest,
                deleted: false
            })
            if (tickets.length > 0) return { error: 403, msg: 'Dilarang ada nomor penerbngan di lebih dari satu bandara ke tujuan sama di waktu yang sama' }
            args.flight_number = flightCodeNumber
            let ticket = await ticketsRepo.create(args)
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
            date_air: req.body.date_air,
            price: req.body.price,
            no_chair: req.body.no_chair,
            type: req.body.type_ticket,
            deleted: false,
            logo: req.body.image,
            estimated_up_dest: req.body.estimated_up_dest,
            kelas: req.body.kelas
        }
        
        // Prosws pembuatan data fiel flight_number
        let arrAirline = args.name.split('')
        let flightCodeNumber = `${arrAirline[0]}${arrAirline[arrAirline.length - 1]} ${req.body.flightNumber}`
        flightCodeNumber = flightCodeNumber.toUpperCase()
        try {
            let tickets = await ticketsRepo.findAll({
                flight_number: flightCodeNumber,
                from: req.body.from_city,
                dest: req.body.destination,
                date_air: req.body.date_air,
                estimated_up_dest: req.body.estimated_up_dest,
                deleted: false
            })
            if (tickets.length > 1) {
                return { error: 403, msg: 'Dilarang ada nomor penerbngan di lebih dari satu bandara ke tujuan sama di waktu yang sama' }
            } else if (tickets.length === 1) {
                if (tickets[0].id !== req.ticket.id) return { error: 403, msg: 'Dilarang ada nomor penerbngan di lebih dari satu bandara ke tujuan sama di waktu yang sama' }
            }
            console.log(args);
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
            date_air: req.query.depart,
            deleted: false
        }
        if (!schedule) {
            args.kelas = req.query.kelas
            args.type = {
                [Sequelize.Op.in]: req.query.type_passenger
            }
        }
        try {
            data.go = await ticketsRepo.findAll(args)
            if (req.query.return) {
                args.date_air = req.query.return
                data.return = await ticketsRepo.findAll(args)
            }
            return {tickets : data}
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}