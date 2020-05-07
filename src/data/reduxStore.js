import {createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
import accountsReducer from './accountsReducer';
import navBarReducer from './navBarReducer';


let redusers = combineReducers({ 
    UsersData: usersReducer,
    MessagesData: messagesReducer,
    AccountsData: accountsReducer,
    navBarData: navBarReducer
});
    

let store = createStore(redusers);

window.store = store

export default store;