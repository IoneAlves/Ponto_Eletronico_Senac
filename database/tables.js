const Sequelize = require('sequelize');
const databaseConnection = require('./connection');

const tableLogin = databaseConnection.sequelize.define('login', {
    idLogin: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emailLogin: {
        type: Sequelize.STRING,
    },
    passwordLogin: {
        type: Sequelize.STRING
    }
  },{
    timestamps: false
    }
);

  module.exports = {
    tableLogin
  }
