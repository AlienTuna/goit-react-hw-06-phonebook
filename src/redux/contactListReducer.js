const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contacts: [],
    filter: '',
}
const contactListSlice = createSlice({
    name: 'contactsSlice',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    }
})

export const {setContacts, setFilter, addContact, deleteContact} = contactListSlice.actions;
export const contactListReducer = contactListSlice.reducer;