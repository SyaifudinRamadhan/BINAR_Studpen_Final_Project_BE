'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Transactions, {
      //   foreignKey: 'trx_id',
      //   as: 'trx'
      // })
      this.belongsTo(models.Tickets, {
        foreignKey: 'ticket_id',
        as: 'ticket'
      })
    }
  }
  Carts.init({
    trx_id: DataTypes.INTEGER,
    ticket_id: DataTypes.UUID,
    status: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    chair_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};