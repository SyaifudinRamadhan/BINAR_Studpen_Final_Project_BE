const {Notifications} = require('../models');

module.exports = {
    create(args){
        return Notifications.create(args)
    }
}