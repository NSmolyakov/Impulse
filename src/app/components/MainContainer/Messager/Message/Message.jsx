import React from 'react'
import './Message.css'
import Sent from '../../../../assets/img/sent.svg'

function Message(props) {

    let dilivered = props.dilivered;

    return (
        <div className='MessageWrapper'>
            <div className='Message'>

                <p className='Text'>{props.message}</p>

                <br />
                <p className='Time'>{props.time}</p>  
                { dilivered ?   <img className='Sent' src={Sent} alt='D' />
                                
                            :   <div></div> }

            </div>
        </div>
    )
}

export default Message;
