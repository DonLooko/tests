import { createPrimitiveComponent } from '@pdffiller/ui-kit/lib/utils/createPrimitiveComponent';

import css from './ContactList.module.scss';

const ContactList = createPrimitiveComponent({
  displayName: 'ContactList',
  className: css.contactList,
  modifiers: {
    isAddressBook: css.contactList_isAddressBook,
  },
});

ContactList.Header = createPrimitiveComponent({
  displayName: 'ContactCard.Header',
  className: css.contactList__header,
});

ContactList.Content = createPrimitiveComponent({
  displayName: 'ContactCard.Content',
  className: css.contactList__content,
  modifiers: {
    isEmptySearch: css.contactList__content_isEmptySearch,
  },
});

ContactList.Footer = createPrimitiveComponent({
  displayName: 'ContactCard.Footer',
  className: css.contactList__footer,
});

ContactList.EmptyList = createPrimitiveComponent({
  displayName: 'ContactCard.EmptyList',
  className: css.contactList__emptyList,
});

ContactList.EmptySearch = createPrimitiveComponent({
  displayName: 'ContactCard.EmptySearch',
  className: css.contactList__emptySearch,
});

export default ContactList;
