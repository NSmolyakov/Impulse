import React from 'react';
import { Link } from 'react-router-dom';

import messagesActive from '../../assets/img/messagesActive.svg'
import contactsActive from '../../assets/img/contactsActive.svg'
import settingsActive from '../../assets/img/settingsActive.svg'
import Messages from '../../assets/img/messages.svg'
import Contacts from '../../assets/img/contacts.svg'
import Settings from '../../assets/img/settings.svg'

import './NavBar.css'

function NavBar(props) {

    let currentLink = String(window.location.href);

    return (
        <div className='NavBar'>
            <div className='NavBarElements'>
                {
                    props.navBarData.Links[0].messagesActiveLink === currentLink
                        ? <Link to='messages'><img src={messagesActive} alt='messagesActive' /></Link>
                        : <Link to='messages'><img src={Messages} alt='messages' /></Link>

                }

                {
                    props.navBarData.Links[1].contactsActiveLink === currentLink
                        ? <Link to='contacts'><img src={contactsActive} alt='contactsActive' /></Link>
                        : <Link to='contacts'><img src={Contacts} alt='contacts' /></Link>

                }

                {   props.navBarData.Links[2].settingsActiveLink === currentLink
                    ? <Link to='settings'><img src={settingsActive} alt='settingsActive' /></Link>
                    : <Link to='settings'><img src={Settings} alt='settings' /></Link>
                } 

            </div>
        </div>
    );
}

export default NavBar;
