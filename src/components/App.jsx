import { nanoid } from "nanoid";

import { ContactForm } from "./ContactForm";
import { ContactList } from './ContactList';
import { Filter } from "./Filter";

import { Container, SectionStyled } from "./App.styled";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, addContact, deleteContact } from 'redux/contactListReducer';


export function App() {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactList.contacts);
  const filter = useSelector((state) => state.contactList.filter)

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  const checkContactByName = cName => {
    const array = contacts;
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
    const id = nanoid(4);
    dispatch(addContact({ id, name, number }))
  }

  const filterContactsByName = () => {
    const ff = filter.toLowerCase() ?? '';
    return contacts.filter(contact => contact.name.toLowerCase().includes(ff))
  }

  const deleteContactById = id => {
    dispatch(deleteContact(id))
  }


  return (
    <SectionStyled>
      <h1>Phonebook</h1>
      <Container>
        <h2>Add new contact</h2>
        <ContactForm
          onAddContact={addNewContact} />
      </Container>

      <Container>
        <h2>Contacts</h2>
        <Filter
          filterString={filter}
          onSetFilter={handleFilterChange}
        />
        <ContactList
          list={filterContactsByName()}
          onDeleteContact={deleteContactById}
        />
      </Container>
    </SectionStyled>
  )
}
