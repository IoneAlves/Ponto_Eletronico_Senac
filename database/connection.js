const Sequelize = require('sequelize');

const sequelize = new Sequelize('pontosenac', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {freezeTableName: true},
    query:{raw:true},
    port: 3306
  });

sequelize.authenticate().then(()=>{
    console.log('Connected!');    
}).catch((err)=>{
    if (err) throw err;
    console.log('Connected!');    
});

module.exports = {
    sequelize 
}
