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
      this.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      })
      this.belongsTo(models.Tickets, {
        foreignKey: 'ticket_id',
        as: 'ticket'
      })
      this.hasMany(models.Transactions, {
        foreignKey: 'cart_id',
        as: 'transactions'
      })
    }
  }
  Carts.init({
    user_id: DataTypes.UUID,
    ticket_id: DataTypes.UUID,
    status: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};