import React from 'react'

import Linkbtn from '../../elements/Linkbtn/Linkbtn';
import NavBar from '../../modules/NavBar/NavBar';
import TopNav from '../../modules/TopNav/TopNav';


const ContactImport = () => {
    return( <div className='MainContainer'>
                <TopNav header='Импорт контактов'/>
                <p>Импорт контактов временно недоступен</p>
                <Linkbtn text='Назад' link='/contacts' />
            <NavBar />
        </div>
    )
}

export default ContactImport;