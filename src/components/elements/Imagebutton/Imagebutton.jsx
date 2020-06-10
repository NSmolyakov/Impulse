import React from 'react'
import { Link } from 'react-router-dom'

import './Imagebutton.css'


const Imagebutton = (props) => {
    return (
        <Link to={props.link}>
        <div className='itemBtn'>
            <img src={props.src} alt={props.alt} />
            <h2>{props.text}</h2>
        </div>
        </Link>
    )
}

export default Imagebutton