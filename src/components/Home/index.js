import React from 'react';
import './style.css';
import Button from '../Button';
import {Link} from 'react-router-dom'

function Home () {
    return (
        <div className='hero'>
            <div className='hero__transparency'>
                <div className='hero__box'>
                    <div className='hero__content'>
                        <div className='hero__content__img'>
                            <img className='img_logo' src={'assets/images/Senac_logo.png'} ></img>
                        </div>
                        <p className='hero__content__text'>sistema eletrônico de ponto de funcionários</p>
                        <div className='hero__content__bnt '>
                            <Link to='/login' style={{textDecoration: 'none'}}>
                                <Button svgIcon={'assets/images/login_icon.svg'} pageName='Acessar'/>
                            </Link>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;