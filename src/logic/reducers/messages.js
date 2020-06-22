const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    Messages: [
        {id:1, message:'Только не затягивай с этим вопросом', time:'22:40', sent:true },
        {id:2, message:'Отлично!', time:'23:11', sent:true },
        {id:3, message:'Ты серьёзно?', time:'23:40', dilivered:true},
        {id:4, message:'Что ты имеешь ввиду?', time:'23:40', dilivered:true},
        {id:5, message:'Потом обсудим',time:'23:42',  sent:true},
    ],
    newMessageBody:'',
}


export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            state.newMessageTime = action.time;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.Messages.push( {  id:6, 
                                    message: body, 
                                    time:new Date().toLocaleTimeString().slice(0,-3), 
                                    dilivered:true} ); 
            return state
        default:
            return state;
    }
}

export const sendMessageCreator = ()=>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY , body:body})

export default messagesReducer;