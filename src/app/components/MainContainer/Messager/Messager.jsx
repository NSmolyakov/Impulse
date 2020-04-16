import React from 'react'
import EasyLogo from '../../../assets/img/easyLogo.svg'
import Send from '../../../assets/img/send.svg'
import Message from './Message/Message'
import MessageIn from './Message/MessageIn'
import './Messager.css'



function Messager() {

    let emptyCheker = false;

    return (
        <div className='Messager'>
            <div className="MessagerWrapper">

                { emptyCheker   ?   <div className='EmptyMessager'>
                                        <img src={EasyLogo} alt='no message' />
                                        <p>Пока нет сообщений.<br />
                                        Напишите что-нибудь</p>
                                    </div>

                                : <div className='Messages'>
                                        <Message text='Привет' />
                                        <MessageIn text='И тебе привет' />
                                        <Message text='Есть к тебе серьёзный разговор' />
                                        <MessageIn text='О чём?'/>
                                    </div>
                }

                <div className='sendMessage'>
                    <input type="text" placeholder="Введите своё сообщение..."></input>
                    <img src={Send} alt='send' />
                </div>
            </div>


        </div>

    )
}

export default Messager;