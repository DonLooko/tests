import React, { useEffect } from 'react';
import ContactInput from './components/ContactInput';
import ContactsBook from './components/ContactsBook';
import ContactSuggestions from './components/ContactSuggestions';
import { getContacts } from './api/requests/searchContacts';

const CONTACTS_MOCK = [
  {
    email: 'test@gmail.com',
    id: '123123',
    contact_name: 'Test Name',
    avatar: '',
    isSelected: false,
  },
];

const ContactPicker = () => {
  useEffect(() => {
    getContacts().then(console.log);
  }, []);

  return (
    <>
      <ContactInput
        selectedContacts={CONTACTS_MOCK}
        onSubmit={() => {}}
        onChange={() => {}}
        onDelete={() => {}}
        onIconClick={() => {}}
      />
      {false && (
        <ContactSuggestions contacts={CONTACTS_MOCK} onSelect={() => {}} />
      )}
      {false && (
        <ContactsBook
          contacts={CONTACTS_MOCK}
          onCheckboxClick={() => {}}
          onSearch={() => {}}
          onCancel={() => {}}
          onSubmit={() => {}}
        />
      )}
    </>
  );
};

export default ContactPicker;
