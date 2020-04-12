import React from 'react';
import TopNav from '../TopNav/TopNav'
import Message from './Message/Message'
import NavBar from '../NavBar/NavBar'
import './MainContainer.css'
import { Switch, Route } from 'react-router-dom';

function MainContainer() {
  return (
    <div className='MainContainer'>
      <TopNav />
      <Switch>
        <Route path='/messages'>
          <Message /> <Message /> <Message /> <Message /> <Message /> <Message /> <Message /> <Message />
        </Route>

        <Route exact path="/users">
          <h1>users</h1>
        </Route>

        <Route exact path="/settings">
          <h1>settings</h1>
        </Route>

      </Switch>

      <NavBar />
    </div>
  );
}

export default MainContainer;
