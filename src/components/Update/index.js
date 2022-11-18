import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Update () {
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
                            <p className="update__content__text2 ">Para alterar o registro inclúido clique em <span>“ALTERAR PONTO”</span>. Feita a alteração clique em <span>“SALVAR ATUALIZAÇÃO”</span></p>
                        </div>
                        <form className='formUpdate' action="">
                            <div className="formData">
                                <div className="formDataInput">
                                    <label for="">TIPO DE REGISTRO</label>
                                    <select name="" id="">
                                        <optgroup label="selecione o turno">
                                            <option value="">ENTRADA TURNO</option>
                                            <option value="">SAÍDA ALMOÇO</option>
                                            <option value="">RETORNO ALMOÇO</option>
                                            <option value="">SAÍDA TURNO</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="formDataInput">
                                    <label for="">DATA</label>
                                    <input  type="date" name="" id=""></input>
                                </div>
                                <div className="formDataInput">
                                    <label for="">HORA</label>
                                    <input className="inputTimeSize" type="datetime" name="" id=""></input>
                                </div>
                            </div>
                            <div className="btnChangeUpdate">
                                <button type="button">ALTERAR PONTO</button>
                                <button type="submit">SALVAR ALTERAÇÃO</button>
                            </div>                            
                        </form>
                        <Link to='/dashboard'><div class="backHome">voltar</div></Link>
                        <div>
                            <p className="update__content__text2 "><span>Atenção: </span>será permitido alterar apenas o tipo do último registro incluído no sistema. Caso deseje alterar data e hora, entre em contato com o RH responsável</p>
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
    )
}

export default Update;