import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';


export default function Contact({ onSubmit }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

 const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
    
  const reset = () => {
    setName('');
      setNumber('');
    };
       return (
        <form onSubmit={handleSubmit}>
          <label className={styles.title}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
            />
          </label>
  
          <label className={styles.title}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter phone number"
              value={number}
              onChange={handleChange}
            />
          </label>
  
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      );
    }
  
  Contact.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };