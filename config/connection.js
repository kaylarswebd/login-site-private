const mongoose = require('mongoose');
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })} else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306
      }
    );
  }

module.exports = mongoose.connection, sequelize;

