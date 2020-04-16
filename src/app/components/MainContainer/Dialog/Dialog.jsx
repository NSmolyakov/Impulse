import React from 'react';
import userPhoto from '../../../assets/img/userPhoto.png'
import './Dialog.css'
import { Link } from 'react-router-dom';

function Dialog() {
  return (
    <Link to='messager'>
         <div className='Dialog'>
         <img alt='UserPhoto' src={userPhoto} />
         <h3 className='UserName'>Александра Шмидт</h3>
         <p className='Discription'>Давай лучше завтра расскажу. Уже поздно</p>
         <p className='Time'>14:40</p>

   </div>
    </Link>

  );
}

export default Dialog;
