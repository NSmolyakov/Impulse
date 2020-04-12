import React from 'react';
import Messages from '../../assets/img/messages.svg'
import Users from '../../assets/img/users.svg'
import Settings from '../../assets/img/settings.svg'
import './NavBar.css'


function NavBar() {
    return (
        <div className='NavBar'>
            <div className='NavBarElements'>
                <img src={Messages} alt='Messages' />
                <img src={Users} alt='Users' />
                <img src={Settings} alt='Settings' />
            </div>
        </div>
    );
}

export default NavBar;
