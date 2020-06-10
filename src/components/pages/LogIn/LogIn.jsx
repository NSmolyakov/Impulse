import React from 'react';
import logo from '../../../assets/img/logo.svg';
import './LogIn.css'

import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Linkbtn from '../../elements/Linkbtn/Linkbtn';


const LogIn = () => {
    return (
        <div className='LogIn'>
            <div className='Logo'>
                <img src={logo} alt='Mount' className='startLogo' />
                <h1 className='presentText'>Mount</h1>
            </div>
            <div className='LoginData'>
                <Input type='text' placeholder='Логин' label='Логин' />
                <Input type='password' placeholder='Пароль' label='Пароль' />
            </div>
            <div className='Actions'>
                <Button text='Вход' link='/messages'/>
                <Linkbtn text='Регистрация' link='/registration' />
            </div>

        </div>
    );
}

export default LogIn;
