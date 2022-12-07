const { chairs_available } = require('../models');
module.exports = {
  create(createArgs) {
    return chairs_available.create(createArgs);
  },
  findAll(args) {
    return chairs_available.findAll({
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