import React from 'react';

import logo from '../../../assets/img/logo.svg';

import './Registration.css'
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Linkbtn from '../../elements/Linkbtn/Linkbtn';

const Registration = () => {
  return (
    <div className='Registration'>

      <div className='Logo'>
        <img src={logo} alt='Mount' className='regLogo' />
        <h1 className='presentText'>Регистрация</h1>
      </div>

      <form>
        <Input type='text' placeholder='Ваше Имя' label='Имя' />
        <Input type='text' placeholder='Придумайте логин' label='Логин' />
        <Input type='password' placeholder='Придумайте пароль' label='Пароль' />
        <Input type='password' placeholder='Повторите пароль' label='Повторите пароль' />
      </form>

      <div className='Actions'>
        <Button text='Регистрация' link='/messages' />
        <Linkbtn text='Вход' link='/login' />
      </div>

    </div>
  );
}

export default Registration;
