const CHANGE_NAV_BAR = 'CHANGE_NAV_BAR';


let initialState = {
    Links: [
        {messagesActiveLink:"https://mount-91ad2.web.app/messages", messagesActiveLinkLocal:"http://localhost:3000/messages"},
        {contactsActiveLink:"https://mount-91ad2.web.app/contacts", contactsActiveLinkLocal:"http://localhost:3000/contacts"},
        {settingsActiveLink:"https://mount-91ad2.web.app/settings", settingsActiveLinkLocal:"http://localhost:3000/settings"},
    ]
}


export const navBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NAV_BAR:
            return state
        default:
            return state;     
    }
}

export const navBarCreator = ()=>({type: CHANGE_NAV_BAR})

export default navBarReducer;

