'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    const users = Array.from({ length: 5 }, (_, i) => ({
      user_name: `TestUser${i + 1}`,
      email: `user${i + 1}@mail.com`,
      password: 'password123',
      date_joined: now,
      is_deleted: false,
    }));

    await queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
