import React from 'react';
import Avatar from '@pdffiller/ui-kit/lib/components/Avatar';
import { getUserInitials } from '@pdffiller/utils/src/UserAvatar/getUserInitials';

type ContactAvatarProps = {
  contact: {
    avatar: string;
    email: string;
    contact_name: string;
  };
  size: number;
};

const getContactInitials = (contact: {
  email: string;
  contact_name: string;
}) => {
  const { email = '', contact_name: name } = contact;

  const [firstName, lastName] = name?.split(' ') || [];

  return (
    getUserInitials({
      firstName,
      lastName,
      email: '',
    }) || email[0]?.toUpperCase()
  );
};

export const ContactAvatar: React.FC<ContactAvatarProps> = ({
  contact,
  size = 16,
}: ContactAvatarProps) => {
  return (
    <Avatar size={size as any}>
      {contact.avatar ? (
        <Avatar.Image src={contact.avatar} alt="" />
      ) : (
        getContactInitials(contact)
      )}
    </Avatar>
  );
};
