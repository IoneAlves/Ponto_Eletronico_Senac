import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Read () {
    return (
        <div className='read'>
            <div className="read__box">
                <div className="read__content">
                    <div>
                        <div className=''>
                            <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                            <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                        </div>
                        <div>
                            <div className="btnPages">
                                CONSULTAR PONTO
                            </div>
                        </div>
                        <div>
                            <p className="read__content__text2 ">Para consultar o histório de registros clique informe uma <span>“DATA INÍCIO”</span> e uma <span>“DATA FIM”</span> e clique em <span>“CONSULTAR”</span></p>
                        </div>
                        <form className="formData" action="">
                            <div className="dataSelect">
                                <div className="dataSelect__input">
                                    <label for="">DATA INÍCIO</label>
                                    <input className="inputGrow"  type="date" name="" id=""></input>
                                </div>
                                <div className="dataSelect__input">
                                    <label for="">DATA FIM</label>
                                    <input className="inputGrow" type="date" name="" id=""></input>
                                </div>
                            </div>
                            <div className="btnChange">
                                <button type="button">NOVA CONSULTA</button>
                                <button type="submit">CONSULTAR</button>
                            </div>                            
                        </form>
                        <div>
                            <div className="btnPages">
                                RESULTADO PESQUISA
                            </div>
                        </div>
                        <div className="btnExport">
                            <button type="button">EXPORTAR PDF</button>
                        </div>
                        <Link to='/dashboard'><div class="backHome">voltar</div></Link>
                    </div>
                </div>                             
            </div>
        </div>
    );
};

export default Read;