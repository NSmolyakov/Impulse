import React from 'react';
import TopNav from '../TopNav/TopNav'
import Message from './Message/Message'
import NavBar from '../NavBar/NavBar'
import './MainContainer.css'

function MainContainer() {
  return (
   <div className='MainContainer'>
            <TopNav />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            <NavBar />
   </div>
  );
}

export default MainContainer;
