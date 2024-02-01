import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { ContactTitle, Container, EmptyTitle, PhoneTitle } from "./App.styled";


const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = contact => {

    const isContact = contacts.some(
      ({name})=> name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContact) {
      alert(`${contact.name} is already in contacts`)
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact},
    ]);
  };

  const filterChange = event => {
    setFilter(event.target.value.trim());
  };


  return (
      <Container>
        <PhoneTitle>Phonebook</PhoneTitle>
        <ContactForm onSubmit={addContact} />

        <ContactTitle>Contacts</ContactTitle>
        {contacts.length > 0 ? (
        <Filter value={filter} onFilterChange={filterChange}/>
        ) : (
          <EmptyTitle>Your phonebook is empty.</EmptyTitle>
        )}
        {contacts.length > 0 && (
          <ContactList />
        )}
        
      </Container>
    );
};

export default App;