import React from 'react';
import './style.css'
import Button from '../Button';

function Dashboard () {
    let nameUser = 'Ione';
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
                        <Button svgIconDashboard={'assets/images/clocks_icon.svg'} pageName='cadastrar'/>  
                        <Button svgIconDashboard={'assets/images/arrow_icon.svg'} pageName='alterar'/>  
                        <Button svgIconDashboard={'assets/images/find_icon.svg'} pageName='consultar'/> 
                        <Button svgIconDashboard={'assets/images/trash_icon.svg'} pageName='deletar'/>
                        <Button svgIconDashboard={'assets/images/user_dashboard_icon.svg'} pageName='meu cadastro'/>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;