import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Registration.css'
import { Link } from 'react-router-dom';

function Registration() {
  return (
   <div className='Registration'>
            
            <div className='Logo'>
              <img src={logo} alt='Mount' className='regLogo' />
              <h1 className='presentText'>Регистрация</h1>
            </div>
            <form>
            <label><h2>Имя</h2><input type="text" placeholder="Ваше Имя"></input></label>
            <label><h2>Логин</h2><input type="text" placeholder="Придумайте логин"></input></label> 
            <label><h2>Пароль</h2><input type="password" placeholder="Придумайте пароль"></input></label>      
            <label><h2>Повторите пароль</h2><input type="password" placeholder="Повторите пароль"></input></label>      
            </form>

            <div className='Actions'>
              <Link to='/messages'><button>Зарегистрироваться</button></Link>
              <Link to="/"><p className='linkBtn'>Вход</p></Link>
            </div>

   </div>
  );
}

export default Registration;
