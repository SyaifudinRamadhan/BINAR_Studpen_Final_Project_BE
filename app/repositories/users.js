const { Op, where } = require('sequelize')
const { Users } = require('../models');

module.exports = {
    create(args) {
        return Users.create(args);
    },
    update(id, args) {
        return Users.update(args, {
            where: {
                id
            }
        })
    },
    // Menggunakan metode soft delete
    delete(id) {
        return Users.update({
            deleted: true
        }, {
            where: { id }
        })
    },
    find(argsWhere) {
        console.log(argsWhere);
        return Users.findOne({where: argsWhere, include: [{ all: true, nested: true }]})
    },
    findAll(argsWhere) {
        return Users.findAll({ where: argsWhere, include: [{ all: true, nested: true }] })
    },
    findByEmailLike(email) {
        let args = {
            email: {
                [Op.like]: email
            }
        };
        return Users.findAll({ where: args, include: [{ all: true, nested: true }] })
    }
}