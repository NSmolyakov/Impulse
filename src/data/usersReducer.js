let initialState = {
    Users: [
        {id:1, name:'Александра Шмидт', lastMessage:'Давай лучше завтра расскажу. Уже поздно', },
        {id:2, name:'Елизавета Казакова', lastMessage:'Есть к тебе серьёзный разговор'},
        {id:3, name:'Дмитрий Казаков' , lastMessage:'Да, я думаю так лучше будет' },
        {id:4, name:'Янита Афанасьева', lastMessage:'Только не затягивай с этим вопросом'},
        {id:5, name:'Александр Дьяченко', lastMessage:'Ты серьёзно?' },
        {id:6, name:'Алия Харутдинова', lastMessage:'Возможно... ты прав'},
        {id:7, name:'Егор Лыткин', lastMessage:'Только не затягивай с этим вопросом'},
        {id:8, name:'Амира Харутдинова', lastMessage:'Почему ты так думаешь?'},
        {id:9, name:'Александр Семёнов', lastMessage:'Почему ты так думаешь?'},
        {id:10, name:'Пётр Прохоров', lastMessage:'Почему ты так думаешь?'},
        {id:11, name:'Сергей Дмитриев', lastMessage:'Почему ты так думаешь?'},
    ],
}


export const dialogsReducer = (state = initialState) => {
    return(state)
}

export default dialogsReducer;