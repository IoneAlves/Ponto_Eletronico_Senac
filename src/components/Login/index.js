import React, { useState, useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login () {
    const [userInicial, userUpdate] = useState('');
    const [passwordInicial, passwordUpdate] = useState('');
    const [message, messageUpdate] = useState('');
    const [userLogged, userLoggedUpdate] = useState('');

    const navigate = useNavigate();

     async function pickUser(event){
        await userUpdate(event.target.value)
    }

    async function pickPassword(event){
        await passwordUpdate(event.target.value);
    }

    var userLog = '';
    
    const loginApp = async () => {
        await axios.get("http://localhost:3001/getUser")
        .then((response)=>{
            var userDB = response.data;

            userLog = userDB.users.filter((user)=>{
                if(user.email_usuario === userInicial){
                    return user;
                }
            })            

            if(userLog.length !== 0){
                if (userLog[0].email_usuario === userInicial && userLog[0].senha_usuario === passwordInicial) {
                    navigate('/dashboard');            
                } else {
                    messageUpdate('Usuário ou senha inválido. Por favor tente novamente.')
                }
            }else {
                messageUpdate('Usuário ou senha inválido. Por favor tente novamente.');
            };
            console.log(userLog)
        })
        .catch((err)=>{
            console.log(err);
        });        
    };

    return (
        <div className='login'>
            <setion className='login__transparency'>
                <div className='login__box'>
                    <div className='login__content'>
                        <div className=''>
                            <img className='img_logo_senac' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                       
                        </div>
                        <div className='loginDiv'>
                            <p>LOGIN</p>
                            <div className="underBar"></div>
                        </div>
                        <div className='formLogin'>
                            <div className='inputBox'>
                                <img className='login__content__img' src={'assets/images/user_icon.svg'}></img>
                                <input className='inputEmailPassword' type="text" name="email_usuario" id="email" onChange={pickUser}></input>
                            </div>
                            <div>
                                <img className='login__content__img' src={'assets/images/password_icon.svg'}></img>
                                <input className='inputEmailPassword' type="password" name="senha_usuario" id="" onChange={pickPassword}></input>
                            </div>
                            <p>{ message }</p>
                            <div>
                                <button onClick={loginApp} class="login__content__bnt" value='Acessar'>Acessar</button>
                            </div>
                            <div>
                                <p>Esqueceu sua senha ou nome de usuário? <span>Clique aqui.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </setion>
        </div>   
    );
};

export default Login;

