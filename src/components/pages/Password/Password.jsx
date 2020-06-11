import React from 'react'

import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import Linkbtn from '../../elements/Linkbtn/Linkbtn';

import TopNav from '../../modules/TopNav/TopNav';
import NavBar from '../../modules/NavBar/NavBar';


const Password= (props) => {
    return( <div className='MainContainer'>
            <TopNav header='Изменить пароль'/> 
                <div className='Settings'>
                    <Input type='password' placeholder='Новый пароль' label='Новый пароль' />
                    <Input type='password' placeholder='Повторите новый пароль' label='Повторите новый пароль' />
                    <Button text='Сохранить изменения' link='/settings'/>
                    <Linkbtn text='Вернуться без сохранения' link='/settings' />
                </div>
            <NavBar />
        </div>
    )
}

export default Password;