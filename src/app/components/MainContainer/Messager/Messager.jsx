import React from 'react'
import EasyLogo from '../../../assets/img/easyLogo.svg'
import Send from '../../../assets/img/send.svg'
import Message from './Message/Message'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../../../data/messagesReducer'
import './Messager.css'


function Messager(props) {


    let Messages = props.props.MessagesData.Messages.map(d => <Message message={d.message} time={d.time} dilivered={d.dilivered} />)
    let newMessageBody = props.props.MessagesData.newMessageBody;

    let emptyCheker = false;
    
    let newMessageElement = React.createRef();

    let newMessageChange  = (e) => {
        let body = e.target.value
        props.props.dispatch(updateNewMessageBodyCreator(body));
    };


    let sendMessageClick = () => {
        props.props.dispatch(sendMessageCreator());
    }

    return (
        <div className='MessagerWrapper'>
            <div className="Messager">

                { emptyCheker   ?   <div className='EmptyMessager'>
                                        <img src={EasyLogo} alt='no message' />
                                        <p>Пока нет сообщений.<br />
                                        Напишите что-нибудь</p>
                                    </div>

                                : <div className='Messages'>
                                        {Messages}
                                    </div>
                }

                <div className='sendMessage'>
                    <textarea  type="text" 
                            value={newMessageBody} 
                            onChange={newMessageChange} 
                            placeholder="Напишите что-нибудь..." 
                            ref={newMessageElement}></textarea>

                    <img src={Send} 
                    alt='send' 
                    onClick={sendMessageClick} />
                </div>
            </div>


        </div>

    )
}

export default Messager;