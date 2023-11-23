import React, { FormEvent, useState } from 'react';
import MultipleInput from '@pdffiller/ui-kit/lib/components/MultipleInput';
import SVG from '@pdffiller/ui-kit/lib/components/SVG';
import FlexFlow from '@pdffiller/ui-kit/lib/lab/components/FlexFlow';
import AddressBookIcon from 'airslate-static.icons/src/16/address-book.svg';
import Tag from '@pdffiller/ui-kit/lib/components/Tag';
import { ContactAvatar } from './ContactAvatar';

type ContactInputProps = {
  selectedContacts: Array<{
    id: string;
    email: string;
    contact_name: string;
    avatar: string;
  }>;
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
  onDelete: (id: string) => void;
  onIconClick: () => void;
};

const ContactInput = ({
  selectedContacts,
  onChange,
  onSubmit,
  onDelete,
  onIconClick,
}: ContactInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(value);
  };

  const handleDelete = (id: string) => () => onDelete(id);

  return (
    <FlexFlow direction="column" style={{ minWidth: 0 }}>
      <MultipleInput hasButton>
        <MultipleInput.Content tagName="form" onSubmit={handleSubmit}>
          {selectedContacts.map((contact) => (
            <Tag key={contact.id} color="slateBlue" tagName="div">
              <Tag.Avatar>
                <ContactAvatar size={16} contact={contact} />
              </Tag.Avatar>
              <Tag.Title>{contact.email}</Tag.Title>
              <Tag.Close onClick={handleDelete(contact.id)} />
            </Tag>
          ))}

          <MultipleInput.Input
            value={value}
            placeholder="Search contact"
            onChange={handleChange}
          />
        </MultipleInput.Content>
        <MultipleInput.Button onClick={onIconClick}>
          <SVG symbol={AddressBookIcon} />
        </MultipleInput.Button>
      </MultipleInput>
    </FlexFlow>
  );
};

export default ContactInput;
