import React from 'react'

import './Input.css'

const Input = (props) => {
    return (
        <div className='Input'>
            <label><h2>{props.label}</h2></label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>


    )
}

export default Input;