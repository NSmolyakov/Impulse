import React from 'react'
import { Link } from 'react-router-dom';

import './Linkbtn.css'


const Linkbtn = (props) => {
    return (
        <Link to={props.link}> 
           <p className='Linkbtn'>{props.text}</p>
        </Link>
    )
}

export default Linkbtn;