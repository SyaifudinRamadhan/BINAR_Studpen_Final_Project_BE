'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Carts, {
      //   foreignKey: 'ticket_id',
      //   as: 'carts'
      // }),
      this.belongsTo(models.Ticket_Classes, {
        foreignKey: 'kelas',
        as: 'ticketClass'
      }),
      this.belongsTo(models.Type_Passenger, {
        foreignKey: 'type',
        as: 'passenger'
      })
    }
  }
  Tickets.init({
    id:  {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    from: DataTypes.STRING,
    dest: DataTypes.STRING,
    date_air: DataTypes.DATE,
    price: DataTypes.INTEGER,
    no_chair: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    trip_type: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    logo: DataTypes.STRING,
    flight_number: DataTypes.STRING,
    kelas: DataTypes.INTEGER,
    estimated_up_dest: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};