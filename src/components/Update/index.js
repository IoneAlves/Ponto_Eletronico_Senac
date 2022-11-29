import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {useState, useRef} from 'react';
import axios, { AxiosHeaders } from 'axios';

function Update () {

    const [turnoNow, turnoEscolhido] = useState('')
    const [dayNow, dateUpdate] = useState('');
    const [hourNow, hourUpdated] = useState('');
    const [id_update, id_UpdateNew] = useState('');

    console.log(id_update);

    function escolhaTurno(event){
        turnoEscolhido(event.target.value);
    }

    axios.get("http://localhost:3001/getData")
          .then((response)=>{
            var dataDb = response.data;
            var last_add = dataDb.cadastrosPontos.pop()
            dateUpdate(last_add.date)
            hourUpdated(last_add.time)
            id_UpdateNew(last_add.id)
        })
 

    const atualizarPonto = () => {
        axios.put(`http://localhost:3001/update/${id_update}`, {
            id: id_update,
            turno: turnoNow,
            date: dayNow,
            time: hourNow  
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{throw err});
    };


    return (
        <div>
            <div className="update__box">
                <div className="update__content">
                    <div>
                        <div className=''>
                            <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                        </div>
                        <div>
                            <div className="btnPages">
                                ALTERAR PONTO
                            </div>
                        </div>
                        <div>
                            <p className="update__content__text2 ">Para alterar o registro inclúido clique em <span className='destaque'>“Alterar Ponto”</span>. Feita a alteração clique em <span className='destaque'>“Salvar Atualização”</span></p>
                        </div>
                        <form className='formUpdate' action="">
                            <div className="formData">
                                <div className="formDataInput">
                                    <label for="">TIPO DE REGISTRO</label>
                                    <select name="turno" id="" onChange={escolhaTurno}>
                                            <option selected disabled>selecione o turno</option>
                                            <option value="entrada_turno">ENTRADA TURNO</option>
                                            <option value="saida_almoco">SAÍDA ALMOÇO</option>
                                            <option value="retorno_almoco">RETORNO ALMOÇO</option>
                                            <option value="saida_turno">SAÍDA TURNO</option>
                                    </select>
                                </div>
                                <div className="formDataInput">
                                    <label for="">DATA</label>
                                    <input disabled value={dayNow}  type="text" name="" id=""></input>
                                </div>
                                <div className="formDataInput">
                                    <label for="">HORA</label>
                                    <input disabled value={hourNow} className="inputTimeSize" type="datetime" name="" id=""></input>
                                </div>
                            </div>
                            <div className="btnChangeUpdate">
                                <button type="submit" onClick={atualizarPonto}>Salvar Alteração</button>
                            </div>                            
                        </form>
                        <div>
                            <p className="update__content__text2 "><span>Atenção: </span>será permitido alterar apenas o tipo do último registro incluído no sistema. Caso deseje alterar data e hora, entre em contato com o RH responsável</p>
                        </div>
                        <div className="btnLeaveArea">
                            <Link to='/dashboard' style={{textDecoration: 'none'}}><div class="btnPageLeave">voltar</div></Link>
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
    )
}

export default Update;