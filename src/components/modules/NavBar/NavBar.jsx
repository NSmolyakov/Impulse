import React from 'react';
import { Link } from 'react-router-dom';

import Messages from '../../../assets/img/messages.svg'
import Contacts from '../../../assets/img/contacts.svg'
import Settings from '../../../assets/img/settings.svg'
import messagesActive from '../../../assets/img/messagesActive.svg'
import contactsActive from '../../../assets/img/contactsActive.svg'
import settingsActive from '../../../assets/img/settingsActive.svg'

import './NavBar.css'


class NavBar extends React.Component {
   
    state = {
        currentLink: String(window.location.href),
    }

    render() {
        return (
            <div className='NavBar'>
                <div className='NavBarElements'>

                    {
                        this.state.currentLink === 'http://localhost:3000/messages'
                            ? <Link to='messages'><img src={messagesActive} alt='messagesActive' /></Link>
                            : <Link to='messages'><img src={Messages} alt='messages' /></Link>
                    }

                    {
                        this.state.currentLink === 'http://localhost:3000/contacts'
                            ? <Link to='contacts'><img src={contactsActive} alt='contactsActive' /></Link>
                            : <Link to='contacts'><img src={Contacts} alt='contacts' /></Link>
                    }

                    {
                        this.state.currentLink === 'http://localhost:3000/settings'
                            ? <Link to='settings'><img src={settingsActive} alt='settingsActive' /></Link>
                            : <Link to='settings'><img src={Settings} alt='settings' /></Link>
                    }
                    
                </div>
            </div>
        )
    }
}

export default NavBar;
