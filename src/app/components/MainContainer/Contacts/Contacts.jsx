import React from 'react';
import userPhoto from '../../../assets/img/userPhoto.png'
import addContacts from '../../../assets/img/addContacts.svg'
import './Contact.css'


function Contacts() {
  return (
    <div className='Contacts'>
      <div className='itemBtn'>
        <img src={addContacts} alt='addContacts' />
        <h2>Импортировать контакты</h2>
      </div>

    <div className='contactWrapper'>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

          <div className='Contact'>
          <img alt='UserPhoto' src={userPhoto} />
          <p>Александра </p>
          </div>

    </div>
    </div>
  );
}

export default Contacts;
