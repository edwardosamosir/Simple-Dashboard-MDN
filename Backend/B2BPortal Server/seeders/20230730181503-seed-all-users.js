'use strict';
const { hashPassword } = require('../helpers/passwordHasher')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = require('../seedersData.json').users
    await queryInterface.bulkInsert('m_users', users.map(el => {
      const hashedPassword = hashPassword(el.password);
      el.password = hashedPassword;
      el.createdAt = el.updatedAt = new Date();
      return el; 
    }), {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('m_users', null, {})
  }
};
