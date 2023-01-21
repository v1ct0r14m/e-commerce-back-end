const Sequelize = require('sequelize')

const sequelize = new Sequelize('ecommerce_db', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3001
})

module.exports = sequelize;
