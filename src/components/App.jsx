import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";

import { ContactForm } from "./ContactForm";
import { ContactList } from './ContactList';
import { Filter } from "./Filter";

import { Container, SectionStyled } from "./App.styled";


export function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    return storedContacts ?? []
  });
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const checkContactByName = cName => {
    const array = contacts;
    const result = array.find(({ name }) => cName.toLowerCase() === name.toLowerCase())
    if (result) {
      alert(`${cName} is already in contacts`)
      return true
    }
    return false
  }
  const addContact = (name, number) => {
    if (checkContactByName(name)) {
      return
    }
    const id = nanoid(3);
    setContacts(prevContacts => (
      [...prevContacts, { id, name, number }]
    ))
  }

  const filterContactsByName = () => {
    const ff = filter.toLowerCase() ?? '';
    return contacts.filter(contact => contact.name.toLowerCase().includes(ff))
  }

  const deleteContact = id => {
    setContacts(prevContacts => ((prevContacts.filter(contact => contact.id !== id))))
  }


  return (
    <SectionStyled>
      <h1>Phonebook</h1>
      <Container>
        <h2>Add new contact</h2>
        <ContactForm
          onAddContact={addContact} />
      </Container>

      <Container>
        <h2>Contacts</h2>
        <Filter
          filterString={filter}
          onSetFilter={handleFilterChange}
        />
        <ContactList
          list={filterContactsByName()}
          onDeleteContact={deleteContact}
        />
      </Container>
    </SectionStyled>
  )
}
