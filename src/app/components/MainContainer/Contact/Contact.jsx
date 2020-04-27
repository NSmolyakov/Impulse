import React from 'react';
import noPhoto from '../../../assets/img/noPhoto.png'
import './Contact.css'


function Contact(props) {
  return (
        <div className='Contact'>
          <img alt='noPhoto' src={noPhoto} />
          <p>{props.name}</p>
        </div>
  );
}

export default Contact;
