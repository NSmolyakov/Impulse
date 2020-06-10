import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './logic/store'

let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Router state={state} dispatch={store.dispatch.bind(store)}/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state); 
});


serviceWorker.unregister();
