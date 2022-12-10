const {Ticket_Classes} = require('../models');
module.exports = {
    find(name){
        return Ticket_Classes.findOne({
            where: {
                name
            } 
        })
    },
    findAll(){
        return Ticket_Classes.findAll()
    },
    findId(id){
        return Ticket_Classes.findOne({
            where: {id}
        })
    }
}