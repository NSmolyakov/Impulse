import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LogIn from './components/pages/LogIn/LogIn'
import Registration from './components/pages/Registration/Registration'
import Messages from './components/pages/Messages/Messages'
import Contacts from './components/pages/Contacts/Contacts'
import Settings from './components/pages/Settings/Settings'
import Dialog from './components/pages/Dialog/Dialog'

const Router = (props) => {
    return(
        <Switch>
            <Route exact path='/' component={LogIn} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/registration' component={Registration} />

            <Route exact path='/messages'> 
                <Messages props={props.state.UsersData} />
            </Route> 

            <Route exact path='/contacts'> 
                <Contacts props={props.state.UsersData} />
            </Route> 

            <Route path='/settings'> 
                <Settings props={props.state.AccountData} />
            </Route> 

            <Route path='/dialog'> 
                <Dialog props={props.state.MessagesData} dispatch={props.dispatch} />
            </Route> 

        </Switch>
    )
}

export default Router