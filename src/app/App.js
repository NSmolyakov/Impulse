import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration'
import MainContainer from './components/MainContainer/MainContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route path="/registration">
            <Registration />
        </Route>

        <Route path="/messages">
            <MainContainer />
        </Route>

        <Route path="/">
            <LogIn />
        </Route>

    

          

        </Switch>

      </BrowserRouter>
       
    </div>
  );
}

export default App;
