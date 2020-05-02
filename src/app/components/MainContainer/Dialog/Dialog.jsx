import React from 'react';
import noPhoto from '../../../assets/img/noPhoto.png'
import './Dialog.css'
import { Link } from 'react-router-dom';

function Dialog(props) {
  return (
    <Link to='messager'>
      <div className='Dialog'>
         <img alt='UserPhoto' src={noPhoto} />
         <h3 className='UserName'>{props.name} </h3>
         <p className='Discription'>{props.lastMessage}</p>
         <p className='Time'>{props.time}</p>
      </div>
    </Link>

  );
}

export default Dialog;
