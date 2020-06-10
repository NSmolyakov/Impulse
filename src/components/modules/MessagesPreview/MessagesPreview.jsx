import React from 'react';
import noPhoto from '../../../assets/img/noPhoto.png'
import './MessagesPreview.css'
import { Link } from 'react-router-dom';

function MessagesPreview(props) {
  // let id = props.id
  // let URL = 'messager/' + id
  return (
    <Link to='/dialog'>
      <div className='MessagesPreview'>
         <img alt='UserPhoto' src={noPhoto} />
         <h3 className='UserName'>{props.name} </h3>
         <p className='Discription'>{props.lastMessage}</p>
         <p className='Time'>{props.time}</p>
      </div>
    </Link>

  );
}

export default MessagesPreview;
