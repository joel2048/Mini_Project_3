'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const axios = require("axios");
    const res = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php"); //third party API
    const products = res.data.data
      .filter(p =>
        parseFloat(p.card_prices[0].cardmarket_price) > 0
      )
      .map((p) => ({
        product_id: p.id,
        product_type: p.type,
        product_name: p.name,
        description: p.desc,
        price: parseFloat(p.card_prices[0].cardmarket_price),
        in_stock: true,
    }));

    await queryInterface.bulkInsert("Products", products);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  }
};
