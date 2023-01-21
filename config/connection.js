require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('e')
    {
      host: 'localhost',
      dialect: 'mysql'
    });

module.exports = sequelize;
