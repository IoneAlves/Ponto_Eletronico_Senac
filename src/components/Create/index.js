import React from 'react';
import './style.css';
import Button from '../Button';
import {useState, useRef} from 'react';

function Create (props) {    
    
    const inputDate = useRef(null);
    const [dayNow, dateUpdate] = useState('teste');
    
    const inputTime = useRef(null);
    const [hourNow, hourUpdated] = useState('teste');
    
    let nameUser = 'Ione'
  
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

    return (
        <div className='create'>
            <div className='create__box'>
                <div className='create__content'>
                    <div className=''>
                        <img className='create__content__img__logo' src={'assets/images/Senac_logo.png'} ></img>
                        <p className="login__content__text">sistema eletrônico de ponto de funcionários</p>                            
                    </div>
                    <div>
                        <Button svgIconcreate={'assets/images/clocks_icon.svg'} pageName='cadastrar'/>  
                    </div>
                    <div>
                        <p>{nameUser}, selecione o tipo do regitro e clique em “incluir ponto” para registrar o ponto</p>
                    </div>
                    <form action="">
                            <div class="formData">
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
                            <div class="formData">
                                <div class="formData">
                                    <label for="">DATA</label>
                                    <input ref={inputDate} type="text" name="date" id="date" value={dayNow} disabled></input>
                                </div>
                                <div class="formData">
                                    <label for="">HORA</label>
                                    <input ref={inputTime} type="text" name="currentTime" id="currentTime" value={hourNow} disabled></input>
                                </div>
                            </div>
                            <button type="submit">incluir ponto</button>
                        </form>
                        <div class="backHome">voltar</div>
                </div>
            </div>
        </div>
    )
}

export default Create;