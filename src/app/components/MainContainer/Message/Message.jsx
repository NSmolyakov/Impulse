import React from 'react';
import userPhoto from '../../../assets/img/userPhoto.png'
import './Message.css'

function Message() {
  return (
   <div className='Message'>
         <img alt='UserPhoto' src={userPhoto} />
         <h2>Александра Шмидт</h2>
         <p>Давай лучше завтра расскажу. Уже поздно</p>
         <p>14:40</p>

   </div>
  );
}

export default Message;
