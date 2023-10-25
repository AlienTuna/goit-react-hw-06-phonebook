import { useState } from 'react';

import { FormStyled, InputStyled, BtnStyled } from "./ContactForm.styled";
import { addContact } from 'redux/contactListReducer';
import { useDispatch, useSelector } from 'react-redux';


export function ContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector((state) => state.contactList.contacts);
    const dispatch = useDispatch();

    const checkContactByName = cName => {
        const array = contacts;
        console.info('!!!!!!!', contacts)
        const result = array.find(({ name }) => cName.toLowerCase() === name.toLowerCase())
        if (result) {
            alert(`${cName} is already in contacts`)
            return true
        }
        return false
    }
    const addNewContact = (name, number) => {
        if (checkContactByName(name)) {
            return
        }
        dispatch(addContact({ name, number }))
    }

    const saveFormState = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name': setName(value);
                break;
            case 'number': setNumber(value);
                break;
            default: return;
        }

    }
    const clearForm = () => {
        setName('');
        setNumber('');
    };
    const save = e => {
        e.preventDefault();
        const nameV = e.currentTarget.name.value;
        const numV = e.currentTarget.number.value;
        addNewContact(nameV, numV);
        clearForm();
    }

    return (
        <FormStyled
            onSubmit={save}
        >
            <label>Name</label>
            <InputStyled
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                pattern="^[a-zA-Zа-яА-Я]+([\u0027\s\u002D][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                required
                value={name}
                onChange={saveFormState}
            />
            <label>Phone</label>
            <InputStyled
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                pattern="\+?\d{1,4}?[\u002D.\s]?\(?\d{1,3}?\)?[\u002D.\s]?\d{1,4}[\u002D.\s]?\d{1,4}[\u002D.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={saveFormState}
            />
            <BtnStyled type="submit">save</BtnStyled>
        </FormStyled>
    )
}