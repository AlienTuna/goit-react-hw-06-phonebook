import { nanoid } from "nanoid";
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
            const {name, number} = action.payload;
            if (!name) {
                console.warn('name is undefined', name, number)
                return
            }
            const id = nanoid(4)
            state.contacts = [...state.contacts, { id, name, number }]
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    }
})

export const { setContacts, setFilter, addContact, deleteContact } = contactListSlice.actions;
export const contactListReducer = contactListSlice.reducer;