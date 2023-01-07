const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DATABASE_URL, {
      // host: '127.0.0.1',
      dialect: 'mysql',
      protocol: 'mysql',
      logging: false
      // port: 3306
    });

module.exports = sequelize;