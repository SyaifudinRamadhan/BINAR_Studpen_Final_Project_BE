'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.UUID
      },
      price: {
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
      },
      token_trx: {
        type: Sequelize.STRING
      },
      give_to: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      order_id: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};