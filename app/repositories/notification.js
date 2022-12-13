const {Notifications} = require('../models');

module.exports = {
    create(args){
        return Notifications.create(args)
    },
    findAll(args){
        return Notifications.findAll({where: args})
    }
}