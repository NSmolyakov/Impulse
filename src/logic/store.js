import {createStore, combineReducers } from 'redux'

import usersReducer from './reducers/users'
import messagesReducer from './reducers/messages';


let redusers = combineReducers({ 
    UsersData: usersReducer,
    MessagesData: messagesReducer,
});


let store = createStore(redusers);

export default store;