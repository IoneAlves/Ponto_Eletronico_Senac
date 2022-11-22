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

const tableCadastroPonto = databaseConnection.sequelize.define('ponto', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  turno: {
      type: Sequelize.STRING,
  },
  date: {
      type: Sequelize.STRING
  },
  time: {
      type: Sequelize.STRING
  }
},{
  timestamps: false
  }
);

// tableCadastroPonto.sync({force: true});

  module.exports = {
    tableLogin,
    tableCadastroPonto
  }
