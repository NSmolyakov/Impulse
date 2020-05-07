import React from 'react'
import './Settings.css'
import Edit from '../../../assets/img/edit.svg'
import ChangePassword from '../../../assets/img/changePassword.svg'
import Exit from '../../../assets/img/exit.svg'
import noPhoto from '../../../assets/img/noPhoto.png'
import { Link } from 'react-router-dom'

function Settings(props) {
    return (
        <div className='Settings'>
            <div className='Account'>
                <img alt='UserPhoto' src={noPhoto} />
                <h3 className='UserName'>{props.props.Accounts[0].name}</h3>
                <p className='Discription'>{props.props.Accounts[0].status}</p>
            </div>

            <div className='itemBtn'>
                <img src={Edit} alt='edit' />
                <h2>Редактировать профиль</h2>
            </div>

            <div className='itemBtn'>
                <img src={ChangePassword} alt='changePassword' />
                <h2>Изменить пароль</h2>
            </div>

            <Link to='/'>
                <div className='itemBtn'>
                    <img src={Exit} alt='exit' />
                    <h2>Выход</h2>
                </div>
            </Link>
        </div>
    )
}

export default Settings;