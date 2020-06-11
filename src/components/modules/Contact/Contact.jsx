import React from 'react';
import { Link } from 'react-router-dom';

import noPhoto from '../../../assets/img/noPhoto.png'
import './Contact.css'



const Contact = (props) =>{
  return (
    <Link to='/dialog'>
      <div className='Contact'>
        <img src={noPhoto} alt={props.alt} />
        <p>{props.name}</p>
      </div>
    </Link>
        
  );
}

export default Contact;
