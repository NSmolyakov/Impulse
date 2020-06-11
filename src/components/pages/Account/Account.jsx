import React from 'react'

import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Linkbtn from '../../elements/Linkbtn/Linkbtn';

import TopNav from '../../modules/TopNav/TopNav';
import NavBar from '../../modules/NavBar/NavBar';


const Account= (props) => {
    return( <div className='MainContainer'>
            <TopNav header='Редактировать профиль'/> 
                <div className='Settings'>
                    <Input type='text' placeholder='Введите новое имя пользователя' label='Имя пользователя' />
                    <Button text='Сохранить изменения' link='/settings'/>
                    <Linkbtn text='Вернуться без сохранения' link='/settings' />
                </div>
            <NavBar />
        </div>
    )
}

export default Account;