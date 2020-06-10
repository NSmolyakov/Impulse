import React from 'react'

import './Textarea.css'

const Textarea = (props) => {
    return (
        <div className='Textarea'>
            <label><h2>{props.label}</h2></label>
            <textarea placeholder={props.placeholder} ref={props.ref} value={props.value} onChange={props.onChange}> 
                {props.text}
            </textarea>
        </div>
    )
}

export default Textarea;