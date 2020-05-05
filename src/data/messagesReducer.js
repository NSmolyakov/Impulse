const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    Messages: [
        {id:1, message:'Только не затягивай с этим вопросом', time:'23:35', dilivered:true },
        {id:2, message:'Есть к тебе серьёзный разговор', time:'23:36',  dilivered:true },
        {id:3, message:'Да, я думаю так лучше будет', time:'23:36', dilivered:true },
        {id:4, message:'Ты серьёзно?', time:'23:40',  dilivered:false},
        {id:5, message:'Возможно... ты прав',time:'23:42',  dilivered:false},
    ],
    newMessageBody:'',
}




export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.Messages.push({id:6, message: body, time:'23:42', dilivered:false}); 
            return state
        default:
            return state;     
    }
}

export const sendMessageCreator = ()=>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY , body:body})

export default messagesReducer;