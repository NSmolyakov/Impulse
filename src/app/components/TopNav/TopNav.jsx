import React from 'react';
import './TopNav.css'

function TopBar(props) {
  return (
    <div className='TopBar'>
      <h1> {props.header} </h1>
    </div>
  );
}

export default TopBar;
