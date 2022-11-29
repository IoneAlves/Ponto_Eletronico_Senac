import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {useState, useRef} from 'react';
import axios from 'axios';

function Delete () {
    const [pontoDeleteDisplay, pontoDelete] = useState([]);
    const [id_delete, id_Search] = useState('');
    const [horario, horarioEscolhido] = useState();
    const [dataSelect, dataEscolhida] = useState();

    function invertDate (x){
        return x.split('-').reverse().join('-');
    }

    function escolhaData(event){
        let dateInvert = event.target.value;
        dataEscolhida(invertDate(dateInvert));
    }

    function escolhaHorario(event){
        horarioEscolhido(event.target.value);
    }
  
    const  pesquisarPontoDelete = async () => {   
        var dataDisplay = []; 

        await axios.get("http://localhost:3001/getData")
          .then((response)=>{
            var dataDb = response.data;

            for (let index = 0; index < dataDb.cadastrosPontos.length; index++) {
                if(dataDb.cadastrosPontos[index].date === dataSelect && dataDb.cadastrosPontos[index].turno === horario) {
                    let n = dataDb.cadastrosPontos[index].id;
                    id_Search(n);
                    dataDisplay =
                    <table>
                        <tr>
                            <td>Número Registro</td>
                            <td>Turno</td>
                            <td>Data</td>
                            <td>Horário</td>
                        </tr>      
                        <tr>
                            <td>{dataDb.cadastrosPontos[index].id}</td>
                            <td>{dataDb.cadastrosPontos[index].turno}</td>
                            <td>{dataDb.cadastrosPontos[index].date}</td>
                            <td>{dataDb.cadastrosPontos[index].time}</td>
                        </tr>        
                    </table>                                         
                }               
            }

            if (dataDisplay.length === 0) {
                dataDisplay = 'Período não localizado'                
            }
        })
        pontoDelete(dataDisplay)
    };


    const deletarPonto = () => {
        axios.get(`http://localhost:3001/delete/${id_delete}`)
        .then((response)=>{
            console.log(console.log(response));
        })
        .catch((err)=>{console.log(err)});
    };

    return(
        <div>
            <div className="delete__box">
                <div className="delete__content">
                    <div>
                        <div className=''>
                            <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                        </div>
                        <div>
                            <div className="btnPages">
                                DELETAR PONTO
                            </div>
                        </div>
                        <div>
                            <p className="delete__content__text2 ">Para deletar um registro, selecione a data e o tipo do registro e clique em <span className='destaque'>“Pesquisar”</span>. Verifique se o registro pesquisado é o que deseja alterar, então clique em <span className='destaque'>“Deletar”</span></p>
                        </div>
                        <div className='formDelete'>
                            <div className="formData">
                                <div className="formData">
                                    <label for="">DATA</label>
                                    <input type="date" name="dataSelect" id="date" onChange={escolhaData} ></input>
                                </div>
                                <div className="formDataInput">
                                    <label for="">TIPO DE REGISTRO</label>
                                    <select name="horario" id="" onChange={escolhaHorario}>
                                        <option value="" disabled selected>Escolha uma opção</option>
                                        <option value="entrada_turno">ENTRADA TURNO</option>
                                        <option value="saida_almoco">SAÍDA ALMOÇO</option>
                                        <option value="retorno_almoco">RETORNO ALMOÇO</option>
                                        <option value="saida_turno">SAÍDA TURNO</option>
                                    </select>
                                </div>
                                <div className="btnChangeDelete">
                                    <button onClick={pesquisarPontoDelete} type="button">PESQUISAR</button>
                                </div>
                            </div>                      
                        </div>
                        <div className='tableArea'>
                            { pontoDeleteDisplay }
                        </div>
                        <form action=''>
                            <div className="btnChangeDelete">
                                <button onClick={deletarPonto} type="submit">Deletar</button>
                            </div>     
                        </form>
                        <div>
                            <p className="delete__content__text2 "><span>Atenção: </span>será permitido alterar apenas o tipo do último registro incluído no sistema. Caso deseje alterar data e hora, entre em contato com o RH responsável</p>
                        </div>
                        <div className='btnLeaveArea '>
                            <Link to='/dashboard' style={{textDecoration: 'none'}}><div className="btnPageLeave">voltar</div></Link> 
                        </div>

                    </div>
                </div>                             
            </div>
        </div>
    );
}

export default Delete;