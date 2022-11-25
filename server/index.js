const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bdTables = require('../database/tables')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'pontosenac'
})

app.use(cors());
app.use(express.json());

app.post('/cadastro', (req, resp)=>{   
    bdTables.tableCadastroPonto.create({
        turno: req.body.turno,
        date: req.body.date,
        time: req.body.time
    }).then(()=>{
        resp.send('Ponto Cadastrado Com Sucesso');
    }).catch((erro)=>{
        resp.send('Erro ao gravar' + erro);
    })
})

app.get('/delete/:id', (req, resp)=>{    
    bdTables.tableCadastroPonto.destroy({where: {id: req.params.id}, force: true})
    .then((response)=>{console.log('Deletado com sucesso' + response)})
    .catch((err)=>{console.log("Erro: Não foi possível deletar. Erro:" + err)})
})

app.put('/update/:id', (req, resp)=>{
    bdTables.tableCadastroPonto.update(
        {
            turno: req.body.turno,
            date: req.body.date,
            time: req.body.time
        },
        {
            where: 
            {
                id: req.params.id
            }
        }
    ).then(()=>{
        resp.send(console.log('Atualizado com sucesso'))
    })
    .catch((err)=>{console.log(err)})
})

app.get('/getData', (req, resp)=>{
    bdTables.tableCadastroPonto.findAll()
    .then((cadastrosPontos)=>{ 
        resp.send({cadastrosPontos: cadastrosPontos});
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/',(req, res)=>{
    res.json({'mensagem': 'Tudo está conectado'});
})

app.get('/dados',(req, res)=>{
    res.json({'mensagem': 'Tudo está conectado',
              'ano':'1988',
              'hora': '10:44',
              'dia': 'quarta-feira'
            });
})


app.listen(3001, ()=>{
    console.log('Server listening to port 3001');
})

connection.connect((err)=>{
    if (err) throw err;
    console.log('Connected!');    
});