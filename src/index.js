import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './data/reduxStore'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store} >
          <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
          </Provider >
      </React.StrictMode>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
      let state = store.getState();
      rerenderEntireTree(state); 
});

serviceWorker.register();
