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
      queryInterface.removeColumn(
        'Carts', 'user_id'
      ),
      queryInterface.removeColumn(
        'Transactions', 'cart_id'
      ),
      queryInterface.addColumn(
        'Transactions', 'user_id', {
          allowNull: false,
          type: Sequelize.UUID,
        }
      ),
      queryInterface.addColumn(
        'Carts', 'trx_id', {
          allowNull: false,
          type: Sequelize.INTEGER,
        }
      ),
      queryInterface.addColumn(
        'Carts', 'chair_number', {
          allowNull: true,
          type: Sequelize.INTEGER,
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
    // return Promise.all([
    //   queryInterface.removeColumn(
    //     'Carts', 'user_id'
    //   ),
    //   queryInterface.removeColumn(
    //     'Transactions', 'cart_id'
    //   )
    // ])
  }
};
