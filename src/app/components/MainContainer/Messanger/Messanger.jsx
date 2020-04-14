import React from 'react'
import EasyLogo from '../../../assets/img/easyLogo.svg'
import Send from '../../../assets/img/send.svg'
import Message from './Message/Message'
import './Messanger.css'



function Messanger() {

    let emptyCheker = true;

    return (
        <div className='Messanger'>
            <div className="MessangerWrapper">

                { emptyCheker   ?   <div className='EmptyMessanger'>
                                        <img src={EasyLogo} alt='no message' />
                                        <p>Пока нет сообщений.<br />
                                        Напишите что-нибудь</p>
                                    </div>

                                : <Message />
                }

                <div className='sendMessage'>
                    <input type="text" placeholder="Введите своё сообщение..."></input>
                    <img src={Send} alt='send' />
                </div>
            </div>


        </div>

    )
}

export default Messanger;