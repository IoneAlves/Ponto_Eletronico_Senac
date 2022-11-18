const mysql = require('mysql2');
const express = require('express');
const bdTableLogin = require('../database/tables')
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'pontosenac'
})

app.post('/checkin', (req, res)=>{
    bdTableLogin.tableLogin.findAll()
        .then((cadastroUsuario)=>{
            if (cadastroUsuario.emailLogin === req.emailLogin && cadastroUsuario.passwordLogin === req.passwordLogin) {
                res.render('/dashboard');
            } else (
                res.render('/');
            )
        })
})

app.listen(3000, ()=>{
    console.log('Server listening to port 3000');
})

connection.connect((err)=>{
    if (err) throw err;
    console.log('Connected!');    
});