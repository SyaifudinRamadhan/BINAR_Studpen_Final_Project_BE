'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'Tickets', 'logo', {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: '/ticket/ticket_default.jpg'
        }
      ),
      queryInterface.addColumn(
        'Tickets', 'flight_number', {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: 'undefined'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
