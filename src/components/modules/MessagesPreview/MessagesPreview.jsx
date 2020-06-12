import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../../elements/Badge/Badge'
import noPhoto from '../../../assets/img/noPhoto.png'
import './MessagesPreview.css'


function MessagesPreview(props) {
  let id = props.id
  let URL = '/dialog/' + id
  return (
    <Link to={URL} >
      <div className='MessagesPreview'>
         <img alt='UserPhoto' src={noPhoto} />
         <h3 className='UserName'>{props.name} </h3>
         <p className='Discription'>{props.lastMessage}</p>
         <p className='Time'>{props.time}</p>
         <Badge number={props.unread} />
      </div>
    </Link>

  );
}

export default MessagesPreview;
