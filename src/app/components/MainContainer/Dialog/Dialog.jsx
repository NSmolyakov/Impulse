import React from 'react';
import noPhoto from '../../../assets/img/noPhoto.png'
import './Dialog.css'
import { Link } from 'react-router-dom';

function Dialog(props) {
  debugger;
  return (
    <Link to='messager'>
         <div className='Dialog'>
         <img alt='UserPhoto' src={noPhoto} />
         <h3 className='UserName'>{props.name} </h3>
         <p className='Discription'>{props.lastMessage}</p>
         <p className='Time'>14:40</p>

   </div>
    </Link>

  );
}

export default Dialog;
