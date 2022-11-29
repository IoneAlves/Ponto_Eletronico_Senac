import React, { useEffect , useState , useRef} from 'react';
import { ReactDOM } from 'react';
import Axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';

function Read () {
    const [pontos, bdPontos] = useState([]);
    const [mes, mesEscolhido] = useState('')
    const [ano, anoEscolhido] = useState('')

    async function escolhaMes(event){
        await mesEscolhido(event.target.value);
    }

    async function escolhaAno(event){
        await anoEscolhido(event.target.value);
    }

    let newMes ='';
    let monthYear='';

    if(mes <= 9) {
        newMes = 0 + mes;
        console.log(newMes)
        monthYear = `${newMes}-${ano}`  
    } else {
        monthYear = `${mes}-${ano}`  
    }

    const  consultarPonto = async () => {   
        var dataDisplay = []; 

        await Axios.get("http://localhost:3001/getData")
          .then((response)=>{
            dataDisplay.push([<tr className='trHead'>
                <td>Turno</td>
                <td>Data</td>
                <td>Hora</td>
            </tr>]);
            var dataDb = response.data;
            dataDb.cadastrosPontos.forEach((cadastroPonto)=>{
                let newPonto = cadastroPonto.date.substring(3,10);             
                if(newPonto.includes(monthYear)){
                    dataDisplay.push(
                        <tr>
                            <td>{cadastroPonto.turno}</td>
                            <td>{cadastroPonto.date}</td>
                            <td>{cadastroPonto.time}</td>
                        </tr>
                    )
                }
             })
             
             if (dataDisplay.length === 1) {
                dataDisplay = [];
                dataDisplay = 'Período não localizado'                
            }
        })       
       
        bdPontos(dataDisplay)
    };
         
    return (
        <div className='read'>
            <div className="read__box">
                <div className="read__content">
                    <div>
                        <div className=''>
                            <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                        </div>
                        <div>
                            <div className="btnPages">
                                CONSULTAR PONTO
                            </div>
                        </div>
                        <div>
                            <p>Para consultar o histório de registros clique informe uma <span className='destaque'>“Data Início”</span> e uma <span className='destaque'>“Data Fim”</span> e clique em <span className='destaque'>“Consultar”</span></p>
                        </div>
                        <form className="formData" action="">
                            <div className="dataSelect">
                                <label for="">Selecione um mês</label>
                                <select name="mes" id="" onChange={escolhaMes}>
                                    <option value="" selected disabled>Escolha uma opção</option>
                                    <option value="1">Janeiro</option>
                                    <option value="2">Fevereiro</option>
                                    <option value="3">Março</option>
                                    <option value="4">Abril</option>
                                    <option value="5">Maio</option>
                                    <option value="6">Junho</option>
                                    <option value="7">Julho</option>
                                    <option value="8">Agosto</option>
                                    <option value="9">Setembro</option>
                                    <option value="10">Outubro</option>
                                    <option value="11">Novembro</option>
                                    <option value="12">Dezembro</option>
                                </select>
                            </div>
                            <div className="dataSelect">
                                <label for="">Selecione um ano</label>
                                <select name="ano" id="" onChange={escolhaAno}>
                                    <option value="" selected disabled>Escolha uma opção</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>                               
                        </form>
                        <div className="btnChange">
                                <button  type="button" onClick={()=>{bdPontos('')}}>NOVA CONSULTA</button>
                                <button  onClick={consultarPonto} type="button">CONSULTAR</button>
                            </div>  
                        <div className='tableArea'>
                            <div>
                                <table>
                                    { pontos }
                                </table>
                            </div>
                        </div>
                        <div className="btnExport">
                            <button type="button">EXPORTAR PDF</button>
                        </div>
                        <div className='btnLeaveArea'>
                            <Link to='/dashboard'><div className="btnPageLeave">voltar</div></Link>
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
    );
};

export default Read;