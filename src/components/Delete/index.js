import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {useState, useRef} from 'react';
import Axios from 'axios';

function Delete () {
    const inputDate = useRef(null);
    const [pontoDeleteDisplay, pontoDelete] = useState([]);
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

    console.log(horario, dataSelect);
   
    const  pesquisarPontoDelete = async () => {   
        var dataDisplay = []; 
        await Axios.get("http://localhost:3001/getData")
          .then((response)=>{
            var dataDb = response.data;
            dataDb.cadastrosPontos.forEach((cadastroPonto)=>{
                if(cadastroPonto.date === dataSelect && cadastroPonto.turno === horario) {
                    dataDisplay = 
                        <tr>
                            <td>{cadastroPonto.id}</td>
                            <td>{cadastroPonto.turno}</td>
                            <td>{cadastroPonto.date}</td>
                            <td>{cadastroPonto.time}</td>
                        </tr>
                }else(
                    dataDisplay = 
                        <tr>
                            <td>Registro não localizado</td>
                        </tr>
                )            
            })
        })              
        pontoDelete(dataDisplay)
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
                            <p className="delete__content__text2 ">Para deletar o registro inclúido selecione a data e o tipo do registro e clique em <span>“PESQUISAR”</span>. Verifique se o registro selecionado é o que deseja alterar, então clique em <span>“DELETAR”</span></p>
                        </div>
                        <form className='formDelete' action="">
                            <div className="formData">
                                <div className="formData">
                                    <label for="">DATA</label>
                                    <input type="date" name="dataSelect" id="date" onChange={escolhaData} ></input>
                                </div>
                                <div className="formDataInput">
                                    <label for="">TIPO DE REGISTRO</label>
                                    <select name="horario" id="" onChange={escolhaHorario}>
                                        <option value="" disabled>Escolha uma opção</option>
                                        <option value="entrada_turno">ENTRADA TURNO</option>
                                        <option value="saida_almoco">SAÍDA ALMOÇO</option>
                                        <option value="retorno_almoco">RETORNO ALMOÇO</option>
                                        <option value="saida_turno">SAÍDA TURNO</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="btnChangeDelete">
                                <button onClick={pesquisarPontoDelete} type="button">PESQUISAR</button>
                                <button type="submit">DELETAR</button>
                            </div>                            
                        </form>
                        <div className='tableArea'>
                            <table>
                                { pontoDeleteDisplay }
                            </table>
                        </div>
                        <Link to='/dashboard'><div class="backHome">voltar</div></Link> 
                        <div>
                            <p className="delete__content__text2 "><span>Atenção: </span>será permitido alterar apenas o tipo do último registro incluído no sistema. Caso deseje alterar data e hora, entre em contato com o RH responsável</p>
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
    );
}

export default Delete;