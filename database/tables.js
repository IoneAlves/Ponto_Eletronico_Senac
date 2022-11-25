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

const tableUsuario = databaseConnection.sequelize.define('usuario', {
  id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  nome_usuario: {
      type: Sequelize.STRING,
  },
  cpf_usuario: {
    type: Sequelize.STRING,
  },
  rg_usuario: {
    type: Sequelize.STRING,
  },
  data_nasc_usuario: {
    type: Sequelize.STRING,
  },
  local_nasc_usuario: {
    type: Sequelize.STRING,
  },
  endereco_usuario: {
    type: Sequelize.STRING,
  },
  numero_usuario: {
    type: Sequelize.INTEGER,
  },
  cep_usuario: {
    type: Sequelize.STRING,
  },
  cidade_usuario: {
    type: Sequelize.STRING,
  },
  estado_usuario: {
    type: Sequelize.STRING,
  },
  funcao_usuario: {
    type: Sequelize.STRING,
  },
  admissao_usuario: {
    type: Sequelize.STRING,
  },
  contrato_usuario: {
    type: Sequelize.STRING,
  },
  salario_usuario: {
    type: Sequelize.STRING,
  },
  carga_horaria_usuario: {
    type: Sequelize.STRING,
  },
  email_usuario: {
    type: Sequelize.STRING,
  },
  senha_usuario: {
    type: Sequelize.STRING,
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
// tableUsuario.sync({force: true});
// tableLogin.sync({force: true});

  module.exports = {
    tableLogin,
    tableUsuario,
    tableCadastroPonto
  }
