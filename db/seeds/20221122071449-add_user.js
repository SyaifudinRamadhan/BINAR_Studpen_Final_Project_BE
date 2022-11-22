'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      id: "ee831b29-47e3-495f-82b9-e45797044d89",
      username: "Farro Axza F.S.",
      email: "axza@gmail.com",
      password: "$2a$10$X7V.FfeIM09h57xISUivxuyaQ3UmjXQcUL.Y6QcgL3icAar5PF4jm",
      g_id: "",
      f_name: "Farro",
      l_name: "Sofi'e",
      active: true,
      access_level: 1,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
      username: "admin",
      email: "admin@binar.com",
      password: "$2a$10$X7V.FfeIM09h57xISUivxuyaQ3UmjXQcUL.Y6QcgL3icAar5PF4jm",
      g_id: "",
      f_name: "admin",
      l_name: "admin",
      active: true,
      access_level: 0,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
