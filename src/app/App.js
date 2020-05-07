import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration'
import MainContainer from './components/MainContainer/MainContainer'

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">

          <Switch>
          <Route exact path="/registration">
              <Registration />
          </Route>

          <Route exact path="/">
              <LogIn />
          </Route>

          <Route path="*">
              <MainContainer UsersData={props.state.UsersData} 
                             MessagesData={props.state.MessagesData}
                             AccountsData={props.state.AccountsData}
                             navBarData={props.state.navBarData} 
                             dispatch={props.dispatch}/>
          </Route>

          </Switch>    
      </div>
    </BrowserRouter>
  );
}

export default App;
