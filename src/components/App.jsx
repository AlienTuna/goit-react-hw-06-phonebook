
import { ContactForm } from "./ContactForm";
import { ContactList } from './ContactList';
import { Filter } from "./Filter";

import { Container, SectionStyled } from "./App.styled";


export function App() {
  return (
    <SectionStyled>
      <h1>Phonebook</h1>
      <Container>
        <h2>Add new contact</h2>
        <ContactForm/>
      </Container>

      <Container>
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
      </Container>
    </SectionStyled>
  )
}
