const { chairs_available } = require('../models');
module.exports = {
  create(createArgs) {
    return chairs_available.create(createArgs);
  },
  update(id, args){
    return chairs_available.update(args, {
      where: {id}
    })
  },
  update2(argsWhere, args){
    return chairs_available.update(args, {
      where: argsWhere
    })
  },
  findAll(args) {
    return chairs_available.findAll({
      where: args
    });
  },
  find(args){
    return chairs_available.findOne({
      where: args
    });
  },
  delete(ticket_id, chair_number) {
    return chairs_available.destroy(
      {
        where: {
          ticket_id, chair_number
        },
      }
    );
  },
};