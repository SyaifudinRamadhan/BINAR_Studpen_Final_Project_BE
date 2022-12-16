const {Checkin} = require('../models')

module.exports = {
    create(args){
        return Checkin.create(args)
    },
    getDetail(args){
        return Checkin.findOne({ehere: args})
    },
    delete(args){
        return Checkin.delete({
            where: args
        })
    }
}