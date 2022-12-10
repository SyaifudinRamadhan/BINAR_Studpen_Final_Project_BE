const ticketClass = require('../repositories/ticket_class');
module.exports = {
    async findAll(){
        return await ticketClass.findAll()
    }
}