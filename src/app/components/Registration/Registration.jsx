import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Registration.css'

function Registration() {
  return (
   <div className='Registration'>
            
            <div className='Logo'>
              <img src={logo} alt='Mount' className='regLogo' />
              <h1 className='presentText'>Регистрация</h1>
            </div>
            <form>
            <label>Имя<input type="text" placeholder="Ваше Имя"></input></label>
            <label>Логин<input type="text" placeholder="Придумайте логин"></input></label> 
            <label>Пароль<input type="password" placeholder="Придумайте пароль"></input></label>      
            <label>Повторите пароль<input type="password" placeholder="Повторите пароль"></input></label>      
            </form>

            <div className='Actions'>
              <button>Зарегистрироваться</button>
            </div>

   </div>
  );
}

export default Registration;
