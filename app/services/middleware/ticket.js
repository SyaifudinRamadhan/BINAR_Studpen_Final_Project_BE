const ticketsRepo = require('../../repositories/tickets');

module.exports = {
    async getTicket(req){
        try {
            let ticket = await ticketsRepo.find({id:  req.params.id})
            if(!ticket) return { error: 404, msg: "Ticket tidak ditemukan" }
            if(ticket.deleted == true) return { error: 404, msg: "Ticket tidak ditemukan" }
            req.ticket = ticket
            return {ticket}
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}