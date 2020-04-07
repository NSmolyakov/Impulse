import React from 'react';
import './App.css';
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration'
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route path="/registration">
            <Registration />
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
