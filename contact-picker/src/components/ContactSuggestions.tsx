import React from 'react';
import ContactList from '../ui/components/ContactList/ContactList';
import Contact from '../ui/components/Contact/Contact';
import { ContactAvatar } from './ContactAvatar';
import Text from '@pdffiller/ui-kit/lib/components/Text';

type Props = {
  contacts: Array<{
    id: string;
    email: string;
    contact_name: string;
    avatar: string;
  }>;
  onSelect: (id: string) => void;
};

const ContactSuggestions = ({ contacts, onSelect }: Props) => {
  const handleSelect = (id: string) => () => onSelect(id);

  return (
    <ContactList>
      <ContactList.Content>
        {contacts.map((contact) => (
          <Contact key={contact.id} onClick={handleSelect(contact.id)}>
            <Contact.Avatar>
              <ContactAvatar size={32} contact={contact} />
            </Contact.Avatar>
            <Contact.LeftColumn>
              <Text variant="small" weight="semiBold">
                {contact.email}
              </Text>
            </Contact.LeftColumn>
          </Contact>
        ))}
      </ContactList.Content>
    </ContactList>
  );
};

export default ContactSuggestions;
