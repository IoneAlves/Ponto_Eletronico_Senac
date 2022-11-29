import React, { useContext } from 'react';
import './style.css'
import Button from '../Button';
import {Link} from 'react-router-dom';

function Dashboard () {
    let nameUser = 'Ione'
    return (
        <div className='dashboard'>
            <div className='dashboard__box'>
                <div className='dashboard__content'>
                    <div className=''>
                        <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                        <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                    </div>
                    <div>
                        <p>Olá, {nameUser}! Clique no opção desejada para manipular o seu cartão de ponto.</p>
                    </div>
                    <div className='dashboard__content__bnt '>
                        <Link to='/cadastrar' style={{textDecoration: 'none'}}>
                            <Button svgIconDashboard={'assets/images/clocks_icon.svg'} pageName='cadastrar'/> 
                        </Link>
                        <Link to='/atualizar' style={{textDecoration: 'none'}}>
                            <Button svgIconDashboard={'assets/images/arrow_icon.svg'} pageName='alterar'/>  
                        </Link>
                        <Link to='/pesquisar'style={{textDecoration: 'none'}}>
                            <Button svgIconDashboard={'assets/images/find_icon.svg'} pageName='consultar'/> 
                        </Link>
                        <Link to='/deletar'style={{textDecoration: 'none'}}>
                            <Button svgIconDashboard={'assets/images/trash_icon.svg'} pageName='deletar'/>
                        </Link>
                        <Link to='/meucadastro'style={{textDecoration: 'none'}}>
                            <Button svgIconDashboard={'assets/images/user_dashboard_icon.svg'} pageName='meu cadastro'/>
                        </Link>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;