import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Button (props) {
    return (
        <div>
            <div className='btnPages'>
                <img fill='white' className='imgSvg' src={props.svgIconDashboard}></img>    
                 {props.pageName}
                <img fill='white' className='imgSvg' src={props.svgIcon}></img>       
            </div>
        </div>
    );
};

export default Button;