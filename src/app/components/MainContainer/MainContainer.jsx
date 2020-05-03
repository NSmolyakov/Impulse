import React from 'react';
import TopNav from '../TopNav/TopNav'
import Dialog from './Dialog/Dialog'
import NavBar from '../NavBar/NavBar'
import './MainContainer.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Contact/Contact';
import Settings from './Settings/Settings'
import Messager from './Messager/Messager'

import addContacts from '../../assets/img/addContacts.svg'


function MainContainer(props) {


  let Dialogs = props.UsersData.Users.map(d => <Dialog name={d.name} id={d.id} lastMessage={d.lastMessage} time={d.time} />);
  let Contacts = props.UsersData.Users.map(d => <Contact name={d.name} id={d.id} />);


  return (
    <div className='MainContainer'>

      <Switch>
        <Route path='/messages'>
          <TopNav header='Сообщения' />
          {Dialogs}
        </Route>

        <Route exact path="/contacts">
          <TopNav header='Контакты' />
          <div className='Contact'>

            <div className='itemBtn'>
              <img src={addContacts} alt='addContacts' />
              <h2>Импортировать контакты</h2>
            </div>
            <div className='contactWrapper'>
              {Contacts}
            </div>
          </div>
        </Route>

        <Route exact path="/settings">
          <TopNav header='Настройки' />
          <Settings />
        </Route>

        <Route exact path="/messager">
          <TopNav header='Анастасия Соколова' />
          <Messager props={props} dispatch={props.dispatch}/>
        </Route>

        <Redirect to='/' />

      </Switch>

      <NavBar />
    </div>
  );
}

export default MainContainer;
