import React from 'react';
import logo from '../../assets/img/logo.svg';
import './LogIn.css'

function LogIn() {
  return (
   <div className='LogIn'>
            
            <div className='Logo'>
              <img src={logo} alt='Mount' className='startLogo' />
              <h1 className='presentText'>Mount</h1>
            </div>

            <div className='Actions'>
              <button>Вход</button>
              <p className='linkBtn'>Регистрация</p>
            </div>

   </div>
  );
}

export default LogIn;
