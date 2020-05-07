let initialState = {
    Links: [
        {messagesActiveLink:"http://localhost:3000/messages"},
        {contactsActiveLink:"http://localhost:3000/contacts"},
        {settingsActiveLink:"http://localhost:3000/settings"}
    ]
}

export const navBarReducer = (state = initialState) => {
    return(state)
}

export default navBarReducer;