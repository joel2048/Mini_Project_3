'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const items = [
      {
        user_id: 1,
        product_id: 27551,
      },
      {
        user_id: 1,
        product_id: 35699,
      },
      {
        user_id: 1,
        product_id: 32864,
      },
      {
        user_id: 1,
        product_id: 96540,
      },
      {
        user_id: 1,
        product_id: 62121,
      },
    ];

    await queryInterface.bulkInsert('wishlist-items', items);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('wishlist-items', null, {});
  }
};
