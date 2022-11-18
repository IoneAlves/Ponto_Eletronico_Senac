import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


function Registration () {
    return (
        <div>
            <div class="registration__box">
                <div class="registration__content">
                    <div>
                        <div className=''>
                            <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                        </div>
                        <div class="centerBtn">
                            <div class="btnPages">
                                MEU CADASTRO
                            </div>
                        </div>
                        <div class="centerBtn">
                            <div class="btnPages">
                                INFORMAÇÕES GERAIS
                            </div>
                        </div>
                        <div class="flexInfo ">
                            <div class="flexInputs">
                                <div>
                                    <p>id usuário</p>
                                    <input class="inputWidth"  type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>nome</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div class="flexInputs">
                                <div class="flexGrow">
                                    <p>cpf</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>rg</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>data nascimento</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>local nascimento</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div class="flexInputs">
                                <div class="flexGrow">
                                    <p>endereço</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>nº</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>cep</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>cidade</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>estado</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div class="flexInputs">
                                <div class="flexGrow">
                                    <p>função</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>admissão</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>contrato</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>salário</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>carga horária</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                        </div>
                        <div class="centerBtn">
                            <div class="btnPages">
                                INFORMAÇÕES DE ACESSO
                            </div>
                        </div>
                        <div class="flexInfo ">
                            <div class="flexInputs">
                                <div class="flexGrow">
                                    <p>e-MAIL DE LOGIN</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                                <div class="flexGrow">
                                    <p>senha</p>
                                    <input class="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div class="btnChangeRegistration">
                                <button type="button">ALTERAR SENHA</button>
                                <button type="submit">SALVAR ALTERAÇÃO</button>
                            </div>    
                        </div>                        
                        <Link to='/dashboard'><div class="backHome">voltar</div></Link> 
                    </div>
                </div>                             
            </div>
        </div>
    )
}

export default Registration;