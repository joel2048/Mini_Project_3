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
    await queryInterface.createTable("user-infos", {
      user_id: Sequelize.STRING,
      full_name: Sequelize.STRING,
      dob: Sequelize.STRING,
      address: Sequelize.STRING,
      iban: Sequelize.STRING,
      bic: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("user-infos");    
  }
};

