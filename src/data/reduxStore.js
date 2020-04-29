import {createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';


let redusers = combineReducers({ 
    UsersData: usersReducer,
    MessagesData: messagesReducer,
});
    

let store = createStore(redusers);

window.store = store

export default store;