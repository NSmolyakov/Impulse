import React from 'react'
import { Link } from 'react-router-dom';

import './Button.css'


const Button = (props) => {
    return (
        <Link to={props.link}> 
            <button>{props.text}</button>
        </Link>
    )
}

export default Button;