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

app.get('/getUser', (req, resp)=>{
    bdTables.tableUsuario.findAll()
    .then((users)=>{ 
        resp.send({users: users});
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.post('/usuario', (req, resp)=>{   
    bdTables.tableUsuario.create({
        nome_usuario: req.body.nome_usuario,
        cpf_usuario: req.body.cpf_usuario,
        rg_usuario: req.body.rg_usuario,
        data_nasc_usuario: req.body.data_nasc_usuario,
        local_nasc_usuario: req.body.local_nasc_usuario,
        endereco_usuario: req.body.endereco_usuario,
        numero_usuario: req.body.numero_usuario,
        cep_usuario: req.body.cep_usuario,
        cidade_usuario: req.body.cidade_usuario,
        estado_usuario: req.body.estado_usuario,
        funcao_usuario: req.body.funcao_usuario,
        admissao_usuario: req.body.admissao_usuario,
        contrato_usuario: req.body.contrato_usuario,
        salario_usuario: req.body.salario_usuario,
        carga_horaria_usuario: req.body.carga_horaria_usuario,
        email_usuario: req.body.email_usuario,
        senha_usuario: req.body.senha_usuario
    }).then(()=>{
        resp.send('Usuário Cadastrado Com Sucesso');
    }).catch((erro)=>{
        resp.send('Erro ao gravar' + erro);
    })
})

app.get('/delete-user/:id', (req, resp)=>{    
    bdTables.tableUsuario.destroy({where: {id_usuario: req.params.id}, force: true})
    .then(()=>{resp.send('Deletado com sucesso')})
    .catch((err)=>{resp.send("Erro: Não foi possível deletar. Erro:" + err)})
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