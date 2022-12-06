'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transactions, {
        foreignKey: 'user_id',
        as: 'trx'
      })
    }
  }
  Users.init({
    id:  {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    g_id: DataTypes.STRING,
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    access_level: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN,
    photo: DataTypes.STRING,
    visa_ID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};