import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import Contact  from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {

const [contacts, setContact] = useState([
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);

const [filter, setFilter] = useState('');

useEffect(() => {
  const contactsSorage = JSON.parse(localStorage.getItem('contacts'));
  if (contactsSorage) {
    setContact(contactsSorage);
  }
}, []);

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const handleSubmit = e => {
  const id = shortid.generate();
  const name = e.name;
  const number = e.number;
  const contactsLists = [...this.state.contacts];

  if (contactsLists.findIndex(contact => name.toLowerCase() === contact.name.toLowerCase()) !== -1) {
    alert(`${name} is already in contacts.`);
  } else {
    contactsLists.push({ name, id, number });
  }
  setContact(contactsLists);
};

const handleDelete = e => {
  setContact(
    contacts.filter(contact => contact.id !== e));
};

const handleChange = e => {
  setFilter(e.currentTarget.value);
};

const getFilteredContacts = () => {
  const filterContactsList = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
  });

  return filterContactsList;
};
     return (
      <>
        <Section title="Phonebook">
          <Contact onSubmit={handleSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} handleChange={handleChange} />
          <ContactList
            contacts={getFilteredContacts()}
            handleDelete={handleDelete}
          />
        </Section>
      </>
    );
  }


