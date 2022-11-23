import React, { useEffect , useState , useRef} from 'react';
import { ReactDOM } from 'react';
import Axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';

function Read () {
    const [pontos, bdPontos] = useState([]);
    const [mes, mesEscolhido] = useState()

    async function escolhaMes(event){
        await mesEscolhido(event.target.value);
    }

    console.log(mes)
     
    const  consultarPonto = async () => {   
        var dataDisplay = []; 

        await Axios.get("http://localhost:3001/getData")
          .then((response)=>{
            var dataDb = response.data;
            dataDb.cadastrosPontos.forEach((cadastroPonto)=>{
                dataDisplay.push(
                    <tr>
                        <td>{cadastroPonto.turno}</td>
                        <td>{cadastroPonto.date}</td>
                        <td>{cadastroPonto.time}</td>
                    </tr>
                )
            })
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
                            <p className="read__content__text2 ">Para consultar o histório de registros clique informe uma <span>“DATA INÍCIO”</span> e uma <span>“DATA FIM”</span> e clique em <span>“CONSULTAR”</span></p>
                        </div>
                        <form className="formData" action="">
                            <div className="dataSelect">
                                <label for="">Selecione um mês</label>
                                <select name="mes" id="" onChange={escolhaMes}>
                                    <option value="" disabled>Escolha uma opção</option>
                                    <option value="1">Janeiro</option>
                                    <option value="2">Feveiro</option>
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
                        </form>
                        <div className="btnChange">
                                <button  type="button">NOVA CONSULTA</button>
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
                        <Link to='/dashboard'><div className="backHome">voltar</div></Link>
                    </div>
                </div>                             
            </div>
        </div>
    );
};

export default Read;