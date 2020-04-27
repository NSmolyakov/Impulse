import {createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer';


let redusers = combineReducers({ 
    UsersData: usersReducer,
});
    

let store = createStore(redusers);

window.store = store

export default store;