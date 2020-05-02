let initialState = {
    Messages: [
        {id:1, message:'Только не затягивай с этим вопросом', time:'23:35', dilivered:true },
        {id:2, message:'Есть к тебе серьёзный разговор', time:'23:36',  dilivered:true },
        {id:3, message:'Да, я думаю так лучше будет', time:'23:36', dilivered:true },
        {id:4, message:'Ты серьёзно?', time:'23:40',  dilivered:false},
        {id:5, message:'Возможно... ты прав',time:'23:42',  dilivered:false},
    ],
}


export const messagesReducer = (state = initialState) => {
    return(state)
}

export default messagesReducer;