const ticketClass = require('../../../services/ticket_class');
const passType = require('../../../services/type_passenger');

module.exports = {
    getAllTicketType(req, res){
        passType.findAll().then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getAllTicketTClass(req, res){
        ticketClass.findAll().then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    }
}