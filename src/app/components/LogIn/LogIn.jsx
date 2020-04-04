import React from 'react';
import logo from '../../assets/img/logo.svg';
import './LogIn.css'

function LogIn() {
  return (
   <div className='LogIn'>
            <img src={logo} alt='Mount'className='Logo' />
            <h1 className='presentText'>Mount</h1>
            <button>Вход</button>
            <p className='linkBtn'>Регистрация</p>

   </div>
  );
}

export default LogIn;
