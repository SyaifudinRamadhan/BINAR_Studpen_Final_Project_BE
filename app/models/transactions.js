'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
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
      this.hasMany(models.Carts, {
        foreignKey: 'trx_id',
        as: 'carts'
      })
      this.hasMany(models.Checkin, {
        foreignKey: 'trx_id',
        as: 'checkins'
      })
    }
  }
  Transactions.init({
    user_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    token_trx: DataTypes.STRING,
    give_to: DataTypes.STRING,
    status: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};