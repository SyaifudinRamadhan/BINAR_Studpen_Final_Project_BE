const {Type_Passenger, Sequelize} = require('../models');
module.exports = {
    find(passenger){
        return Type_Passenger.findOne({
            where: {
                passenger: passenger
            } 
        })
    },
    findAll(){
        return Type_Passenger.findAll()
    },
    findId(id){
        return Type_Passenger.findOne({
            where: {id}
        })
    }
}