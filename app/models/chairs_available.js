'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chairs_available extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chairs_available.init({
    ticket_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    chair_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chairs_available',
  });
  return chairs_available;
};