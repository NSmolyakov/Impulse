import React from 'react'
import Imagebutton from '../../elements/Imagebutton/Imagebutton';
import AccountData from '../../modules/AccountData/AccountData';
import TopNav from '../../modules/TopNav/TopNav';
import NavBar from '../../modules/NavBar/NavBar';


import Edit from '../../../assets/img/edit.svg'
import ChangePassword from '../../../assets/img/changePassword.svg'
import Exit from '../../../assets/img/exit.svg'


const Settings = (props) => {
    debugger;
    return(
        <div className='MainContainer'>
            <TopNav header='Настройки'/> 
                <div className='Settings'>
                    <AccountData 
                            name={props.props.Accounts[0].name}
                            status={props.props.Accounts[0].status} />
                            
                    <Imagebutton src={Edit} alt='Edit' text='Редактировать профиль' />
                    <Imagebutton src={ChangePassword} alt='ChangePassword' text='Изменить пароль' />
                    <Imagebutton src={Exit} alt='Exit' text='Выход' link='/' />
                </div>
            <NavBar />
        </div>
    )
}

export default Settings;