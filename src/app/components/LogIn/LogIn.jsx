import React from 'react';
import logo from '../../assets/img/logo.svg';
import './LogIn.css'
import {NavLink} from 'react-router-dom'

function LogIn() {
  return (
   <div className='LogIn'>
            
            <div className='Logo'>
              <img src={logo} alt='Mount' className='startLogo' />
              <h1 className='presentText'>Mount</h1>
            </div>

            <div className='Actions'>
              <button>Вход</button>
              <NavLink to="/registration"><p className='linkBtn'>Регистрация</p></NavLink>
            </div>

   </div>
  );
}

export default LogIn;
