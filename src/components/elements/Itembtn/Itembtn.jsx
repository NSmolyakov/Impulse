import React from 'react'

import './Itembtn.css'

const Itembtn = (props) => {
    return (
    <div className='itemBtn'>
        <img src={props.src} alt={props.alt} />
        <h2>{props.text}</h2>
    </div>)
}

export default Itembtn;