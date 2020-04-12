import React from 'react';
import Messages from '../../assets/img/messages.svg'
import Users from '../../assets/img/users.svg'
import Settings from '../../assets/img/settings.svg'
import './NavBar.css'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className='NavBar'>
            <div className='NavBarElements'>
                <Link to='messages'><img src={Messages} alt='Messages' /></Link>
                <Link to='users'><img src={Users} alt='Users' /></Link>
                <Link to='settings'><img src={Settings} alt='Settings' /></Link>
            </div>
        </div>
    );
}

export default NavBar;
