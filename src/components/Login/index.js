import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Login () {
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
                        <form className='formLogin' action='/checkin'>
                            <div className='inputBox'>
                                <img className='login__content__img' src={'assets/images/user_icon.svg'}></img>
                                <input className='inputEmailPassword' type="text" name="emailLogin" id="email"></input>
                            </div>
                            <div>
                                <img className='login__content__img' src={'assets/images/password_icon.svg'}></img>
                                <input className='inputEmailPassword' type="password" name="passwordLogin" id=""></input>
                            </div>
                            <div>
                                <button class="login__content__bnt">Acessar</button>
                            </div>
                            <div>
                                <p>Esqueceu sua senha ou nome de usuário? <span>Clique aqui.</span></p>
                                <Link to='/dashboard'><div>Ir Área do DashBoard</div></Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </setion>
        </div>
    );
};

export default Login;
