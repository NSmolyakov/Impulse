let initialState = {
    Messages: [
        {id:1, message:'Только не затягивай с этим вопросом', },
        {id:2, message:'Есть к тебе серьёзный разговор'},
        {id:3, message:'Да, я думаю так лучше будет' },
        {id:4, message:'Ты серьёзно?' },
        {id:5, message:'Возможно... ты прав'},
    ],
}


export const messagesReducer = (state = initialState) => {
    return(state)
}

export default messagesReducer;