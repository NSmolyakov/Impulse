import React from 'react'

import TopNav from '../../modules/TopNav/TopNav';
import NavBar from '../../modules/NavBar/NavBar';
import Message from '../../elements/Message/Message';
import Textarea from '../../elements/Textarea/Textarea'

import {updateNewMessageBodyCreator, sendMessageCreator} from '../../../logic/reducers/messages'

import Send from '../../../assets/img/send.svg'

import './Dialog.css'

const Dialog = (props) => {
    let Messages = props.props.Messages.map(d => <Message message={d.message} time={d.time} dilivered={d.dilivered} />)
    let newMessageBody = props.props.newMessageBody;

    
    let newMessageElement = React.createRef();

    let newMessageChange  = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body));
    };


    let sendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    // Отправка по нажатию Enter
    document.onkeyup = function (n) {
        n = n || window.event;
        if (n.keyCode === 13) {
            sendMessageClick();
        }
        return false;
    }

    return (
        <div className='MainContainer'>
            <TopNav header='Диалог' />

            <div className='DialogWrapper'>
                <div className="Dialog">
                    <div> 
                       {Messages}
                        <div className='sendMessage'>
                            <Textarea   placeholder='Напишите что-нибудь...' 
                                        onChange={newMessageChange}     
                                        ref={newMessageElement} 
                                        value={newMessageBody}  />

                            <img src={Send} alt='send' onClick={sendMessageClick} />
                        </div>
                    </div>
                </div>
            </div>
            
            <NavBar />
        </div>
    )
}

export default Dialog;