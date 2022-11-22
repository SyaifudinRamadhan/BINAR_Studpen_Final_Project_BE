'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tickets', [
      {
        id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
        name: "A09802-7CH",
        from: "Juanda Airport",
        dest: "Ngurarai Airport",
        date_air: new Date(),
        price: 250000,
        no_chair: 1,
        type: "Dewasa",
        trip_type: "pp",
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
        name: "A09803-7CH",
        from: "Ngurarai Airport",
        dest: "Juanda Airport",
        date_air: new Date(),
        price: 250000,
        no_chair: 1,
        type: "Dewasa",
        trip_type: "pp",
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
        name: "A09804-7CH",
        from: "Juanda Airport",
        dest: "Soekarno-Hatta Airport",
        date_air: new Date(),
        price: 1000000,
        no_chair: 1,
        type: "Dewasa",
        trip_type: "p",
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "5b67f1d7-92d4-41c7-8577-4435740aadf1",
        name: "A09805-7CH",
        from: "Juanda Airport",
        dest: "Lanud Halim Perdana Kusuma Airport",
        date_air: new Date(),
        price: 1250000,
        no_chair: 1,
        type: "Dewasa",
        trip_type: "p",
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
