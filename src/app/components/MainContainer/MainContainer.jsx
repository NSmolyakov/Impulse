import React from 'react';
import TopNav from '../TopNav/TopNav'
import Dialog from './Dialog/Dialog'
import NavBar from '../NavBar/NavBar'
import './MainContainer.css'
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import Settings from './Settings/Settings'
import Messanger from './Messanger/Messanger'

function MainContainer() {
  return (
    <div className='MainContainer'>

      <Switch>
        <Route path='/messages'>
          <TopNav header='Сообщения' />
          <Dialog /> <Dialog /> <Dialog /> <Dialog /> <Dialog /> <Dialog /> <Dialog /> <Dialog /> <Dialog />
        </Route>

        <Route exact path="/contacts">
          <TopNav header='Контакты' />
          <Contacts />
        </Route>

        <Route exact path="/settings">
          <TopNav header='Настройки' />
          <Settings />
        </Route>

        <Route exact path="/messanger">
          <TopNav header='Александра Шмидт' />
          <Messanger />
        </Route>

      </Switch>

      <NavBar />
    </div>
  );
}

export default MainContainer;
