import {createStore, combineReducers } from 'redux'

import usersReducer from './reducers/users'
import messagesReducer from './reducers/messages'
import accountsReducer from './reducers/accounts'


let redusers = combineReducers({ 
    UsersData: usersReducer,
    MessagesData: messagesReducer,
    AccountData: accountsReducer,
});


let store = createStore(redusers);

export default store;