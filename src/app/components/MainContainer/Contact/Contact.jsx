import React from 'react';
import noPhoto from '../../../assets/img/noPhoto.png'
import './Contact.css'
import { Link } from 'react-router-dom';


function Contact(props) {
  return (
    <Link to='messager'>
      <div className='Contact'>
        <img alt='noPhoto' src={noPhoto} />
        <p>{props.name}</p>
      </div>
    </Link>
        
  );
}

export default Contact;
