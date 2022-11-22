import React from 'react';
import './style.css';
import Button from '../Button';
import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Create (props) {    
    
    const inputTurno = useRef(null);
    const [turno, turnoEscolhido] = useState()
    
    const inputDate = useRef(null);
    const [dayNow, dateUpdate] = useState('teste');
    
    const inputTime = useRef(null);
    const [hourNow, hourUpdated] = useState('teste');
    
    let nameUser = 'Ione'
    
    //pegar o valor do tipo do turno 

    function escolhaTurno(event){
        turnoEscolhido(event.target.value);
    }
  
    // criação da data automática no input de data
    
    function dateNow () {
        var day, month, year;
        var currentDate = new Date();
        day = currentDate.getDate();
        month = currentDate.getMonth();
        year = currentDate.getFullYear();
        dateUpdate(`${day}/${month}/${year}`);
    }

    setInterval(dateNow,0)

    // criação da hora

    function timeNow () {
        var hours, minutes, seconds; 
        var currentTime = new Date();
        hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
        seconds = currentTime.getSeconds();
        hourUpdated(`${hours}:${minutes}:${seconds}`);
    }

    setInterval(timeNow, 1000);

    // salvar dados no banco de dados

    const salvarPonto = () => {
        axios.post('http://localhost:3001/cadastro', {
            turno: turno,
            date: dayNow,
            time: hourNow  
        }).then((response)=>{
            console.log(response);
        });
    };

    return (
        <div className='create'>
            <div className='create__box'>
                <div className='create__content'>
                    <div className=''>
                        <img className='dashboard__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                        <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                    </div>
                    <div>
                        <Button svgIconcreate={'assets/images/clocks_icon.svg'} pageName='cadastrar'/>  
                    </div>
                    <div>
                        <p>{nameUser}, selecione o tipo do regitro e clique em “incluir ponto” para registrar o ponto</p>
                    </div>
                    <form action="">
                            <div className="formData">
                                <label for="">TIPO DE REGISTRO</label>
                                <select name="turno" id="" onChange={escolhaTurno}>
                                    <option value="" disabled>Escolha uma opção</option>
                                    <option value="entrada_turno">ENTRADA TURNO</option>
                                    <option value="saida_almoco">SAÍDA ALMOÇO</option>
                                    <option value="retorno_almoco">RETORNO ALMOÇO</option>
                                    <option value="saida_turno">SAÍDA TURNO</option>
                                </select>
                            </div>
                            <div className="formData">
                                <div className="formData">
                                    <label for="">DATA</label>
                                    <input ref={inputDate} type="text" name="date" id="date" value={dayNow} disabled></input>
                                </div>
                                <div className="formData">
                                    <label for="">HORA</label>
                                    <input ref={inputTime} type="text" name="time" id="currentTime" value={hourNow} disabled></input>
                                </div>
                            </div>
                            <button type="submit" onClick={salvarPonto}>incluir ponto</button>
                        </form>
                        <Link to='/dashboard'><div className="backHome">voltar</div></Link>                        
                </div>
            </div>
        </div>
    )
}

export default Create;