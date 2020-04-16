import React from 'react'
import './Message.css'
import Sent from '../../../../assets/img/sent.svg'

function MessageIn (props) {
    return(
        <div className='Message MessageIn'>
            <div className="Content">
                <p className='Text'>{props.text}</p>
                <p className='Time'>23:35</p>
                <img className='Sent'src={Sent} alt='D'/>
            </div>
               
        </div>
    )
}

export default MessageIn;
