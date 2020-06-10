import React from 'react'

import TopNav from '../../modules/TopNav/TopNav';
import NavBar from '../../modules/NavBar/NavBar';
import Contact from '../../modules/Contact/Contact';

import './Contacts.css'
import AddContacts from '../../../assets/img/addContacts.svg'
import Imagebutton from '../../elements/Imagebutton/Imagebutton';

const Contacts = (props) => {
    debugger;
    let Contacts = props.props.Users.map(d => <Contact name={d.name} />);
    return(
        <div className='MainContainer'>
            <TopNav header='Контакты'/>

            <div className='Contacts'>
                <Imagebutton src={AddContacts} alt='Import' text='Импортировать контакты' />
                <div className='ContactsWrapper'>
                    {Contacts}
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Contacts;