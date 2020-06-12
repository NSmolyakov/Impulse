import React from 'react'

import TopNav from '../../modules/TopNav/TopNav'
import MessagesPreview from '../../modules/MessagesPreview/MessagesPreview'
import NavBar from '../../modules/NavBar/NavBar'


const Messages =(props) => {
    let MessagesPreviews = props.props.Users.map(d => <MessagesPreview name={d.name} lastMessage={d.lastMessage} time={d.time} unread={d.unread} id={d.id} />);
    return (
        <div className='MainContainer'>
        <TopNav header='Сообщения'/>
           {MessagesPreviews}
        <NavBar />    
        </div>
    )
}

export default Messages;