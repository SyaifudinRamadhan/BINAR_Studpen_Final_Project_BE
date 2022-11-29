const { Op, where } = require('sequelize')
const {Tickets} = require('../models')

module.exports = {
    create(args) {
        return Tickets.create(args);
    },
    update(id, args) {
        return Tickets.update(args, {
            where: {
                id
            }
        })
    },
    // Menggunakan metode soft delete
    delete(id) {
        return Tickets.update({
            deleted: true
        }, {
            where: { id }
        })
    },
    find(argsWhere) {
        console.log(argsWhere);
        return Tickets.findOne({where: argsWhere, include: [{ all: true, nested: true }]})
    },
    findAll(argsWhere) {
        return Tickets.findAll({ where: argsWhere, include: [{ all: true, nested: true }] })
    },
}