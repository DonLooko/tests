import React from 'react';
import SearchIcon from 'airslate-static.icons/src/16/search.svg';
import Button from '@pdffiller/ui-kit/lib/components/Button';
import Text from '@pdffiller/ui-kit/lib/components/Text';
import SVG from '@pdffiller/ui-kit/lib/components/SVG';
import Input from '@pdffiller/ui-kit/lib/components/Input';
import Checkbox from '@pdffiller/ui-kit/lib/components/Checkbox';

import ContactList from '../ui/components/ContactList/ContactList';
import Contact from '../../src/ui/components/Contact/Contact';
import { ContactAvatar } from './ContactAvatar';

type Props = {
  contacts: Array<{
    id: string;
    isSelected: boolean;
    contact_name: string;
    email: string;
    avatar: string;
  }>;
  onCheckboxClick: (id: string) => void;
  onSearch: (value: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
};

const ContactsBook = ({
  contacts,
  onCheckboxClick,
  onSearch,
  onCancel,
  onSubmit,
}: Props) => {
  const handleCheckbox = (id: string) => () => onCheckboxClick(id);
  const handleSearch = (e: any) => onSearch(e.target.value);

  return (
    <ContactList isAddressBook style={{ width: '400px' }}>
      <ContactList.Header>
        <Input
          shape="block"
          icon={<SVG symbol={SearchIcon} />}
          autoFocus
          aria-label="Search contacts"
          onChange={handleSearch}
        />
      </ContactList.Header>
      <ContactList.Content>
        {contacts.map((contact) => (
          <Contact key={contact.id} isSelected={contact.isSelected}>
            <Contact.Checkbox>
              <Checkbox
                checked={contact.isSelected}
                onChange={handleCheckbox(contact.id)}
              />
            </Contact.Checkbox>
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
      <ContactList.Footer>
        <Button shape="block" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button shape="block" onClick={onSubmit}>
          Add selected
        </Button>
      </ContactList.Footer>
    </ContactList>
  );
};

export default ContactsBook;
