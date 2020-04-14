import React from 'react'
import './Message.css'
import Sent from '../../../../assets/img/sent.svg'

function Message () {
    return(
        <div className='Message'>
            <div className="Content">
                <p className='Text'>Привет !</p>
                <p className='Time'>23:35</p>
                <img className='Sent'src={Sent} alt='D'/>
            </div>
               
        </div>
    )
}

export default Message;