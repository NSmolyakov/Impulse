let initialState = {
    Users: [
        {id:1, name:'Анастасия Соколова', lastMessage:'Давай лучше завтра расскажу. Уже поздно', time:'23:42' },
        {id:2, name:'Елизавета Казакова', lastMessage:'Есть к тебе серьёзный разговор', time:'23:40' },
        {id:3, name:'Дмитрий Казаков' , lastMessage:'Да, я думаю так лучше будет', time:'20:25'  },
        {id:4, name:'Янита Афанасьева', lastMessage:'Только не затягивай с этим вопросом', time:'20:25'},
        {id:5, name:'Александр Дьяченко', lastMessage:'Ты серьёзно?', time:'20:00' },
        {id:6, name:'Алия Харутдинова', lastMessage:'Возможно... ты прав', time:'19:00'},
        {id:7, name:'Егор Лыткин', lastMessage:'Только не затягивай с этим вопросом', time:'18:25'},
        {id:8, name:'Амира Харутдинова', lastMessage:'Почему ты так думаешь?', time:'18:00'},
        {id:9, name:'Александр Семёнов', lastMessage:'Почему ты так думаешь?', time:'17:40'},
        {id:10, name:'Пётр Прохоров', lastMessage:'Почему ты так думаешь?', time:'10:40'},
        {id:11, name:'Сергей Дмитриев', lastMessage:'Почему ты так думаешь?', time:'07:40'},
    ],
}


export const dialogsReducer = (state = initialState) => {
    return(state)
}

export default dialogsReducer;