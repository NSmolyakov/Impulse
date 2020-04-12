import React from 'react';
import userPhoto from '../../../assets/img/userPhoto.png'
import './Dialog.css'

function Dialog() {
  return (
   <div className='Dialog'>
         <img alt='UserPhoto' src={userPhoto} />
         <h3 className='UserName'>Александра Шмидт</h3>
         <p className='Discription'>Давай лучше завтра расскажу. Уже поздно</p>
         <p className='Time'>14:40</p>

   </div>
  );
}

export default Dialog;
