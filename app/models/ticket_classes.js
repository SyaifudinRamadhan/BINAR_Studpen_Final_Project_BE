'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket_Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket_Classes.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket_Classes',
  });
  return Ticket_Classes;
};