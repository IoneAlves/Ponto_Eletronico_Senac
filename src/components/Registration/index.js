import React, {Component} from 'react';
import {useState, useRef, useEffect, createContext, useContext} from 'react';
import './style.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Registration () {

    let user = {
        id_usuario: "4",
        nome_usuario: "Ione Alves",
        cpf_usuario: "3216549871",
        rg_usuario: "418529637",
        data_nasc_usuario: "25-03-1990",
        local_nasc_usuario: "Centro/São Paulo",
        endereco_usuario: "Rua Benjamin Constante",
        numero_usuario: 1260,
        cep_usuario: "13170-000",
        cidade_usuario: "Campinas",
        estado_usuario: "São Paulo",
        funcao_usuario: "Programador",
        admissao_usuario: "01-12-2022",
        contrato_usuario: "CLT",
        salario_usuario: "R$5000",
        carga_horaria_usuario: "40 horas semanais",
        email_usuario: "ione.alves@ymail.com",
        senha_usuario: "123456"
    }

    return (
        <div>
            <div className="registration__box">
                <div className="registration__content">
                    <div>
                        <div className=''>
                            <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                        </div>
                        <div className="centerBtn">
                            <div className="btnPages">
                                MEU CADASTRO 
                            </div>
                        </div>
                        <div className="centerBtn">
                            <div className="btnPages">
                                INFORMAÇÕES GERAIS
                            </div>
                        </div>
                        <div className="flexInfo ">
                            <div className="flexInputs">
                                <div>
                                    <p>id</p>
                                    <input value={user.id_usuario} name='id_usuario' id='id_usuario' className="inputWidth"  type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>nome</p>
                                    <input value={user.nome_usuario} name='' id='' className="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div className="flexInputs">
                                <div className="flexGrow">
                                    <p>cpf</p>
                                    <input value={user.cpf_usuario} name='' id='' className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>rg</p>
                                    <input value={user.rg_usuario} name='' id='' className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>data nascimento</p>
                                    <input value={user.data_nasc_usuario} name='' id='' className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>local nascimento</p>
                                    <input value={user.local_nasc_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div className="flexInputs">
                                <div className="flexGrow">
                                    <p>endereço</p>
                                    <input value={user.endereco_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>nº</p>
                                    <input value={user.numero_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>cep</p>
                                    <input value={user.cep_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>cidade</p>
                                    <input value={user.cidade_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>estado</p>
                                    <input value={user.estado_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div className="flexInputs">
                                <div className="flexGrow">
                                    <p>função</p>
                                    <input value={user.funcao_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>admissão</p>
                                    <input value={user.admissao_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>contrato</p>
                                    <input value={user.contrato_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>salário</p>
                                    <input value={user.salario_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>carga horária</p>
                                    <input value={user.carga_horaria_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                        </div>
                        <div className="centerBtn">
                            <div className="btnPages">
                                INFORMAÇÕES DE ACESSO
                            </div>
                        </div>
                        <div className="flexInfo ">
                            <div className="flexInputs">
                                <div className="flexGrow">
                                    <p>e-mail de login</p>
                                    <input value={user.email_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                                <div className="flexGrow">
                                    <p>senha</p>
                                    <input value={user.senha_usuario} className="inputWidth" type="text" disabled></input>
                                </div>
                            </div>
                            <div className="btnChangeRegistration">
                                <button type="button">ALTERAR SENHA</button>
                                <button type="submit">SALVAR ALTERAÇÃO</button>
                            </div>    
                        </div>
                        <div className='btnLeaveArea'>
                            <Link to='/dashboard' style={{textDecoration: 'none'}}><div className="btnPageLeave">voltar</div></Link> 
                        </div>                      
                    </div>
                </div>                             
            </div>
        </div>
    )
}

export default Registration;