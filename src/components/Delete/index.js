import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Delete () {
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
                                <div className="formDataInput">
                                    <label for="">DATA</label><br></br>
                                    <input  type="date" name="" id=""></input>
                                </div>
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
                                <button type="button">PESQUISAR</button>
                                <button type="submit">DELETAR</button>
                            </div>                            
                        </form>
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