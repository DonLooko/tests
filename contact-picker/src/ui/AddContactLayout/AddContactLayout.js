import { createPrimitiveComponent } from '@pdffiller/ui-kit/lib/utils/createPrimitiveComponent';

import FlexFlow from '@pdffiller/ui-kit/lib/lab/components/FlexFlow';
import css from './AddContactLayout.module.scss';

const AddContactLayout = createPrimitiveComponent({
  displayName: 'AddContactLayout',
  className: css.addContactLayout,
});

AddContactLayout.Header = createPrimitiveComponent({
  displayName: 'AddContactLayout.Header',
  className: css.addContactLayout__header,
});

AddContactLayout.Content = createPrimitiveComponent({
  displayName: 'AddContactLayout.Content',
  className: css.addContactLayout__content,
  modifiers: {
    isGray: css.addContactLayout__content_isGray,
  },
});

AddContactLayout.Footer = createPrimitiveComponent({
  displayName: 'AddContactLayout.Footer',
  className: css.addContactLayout__footer,
});

AddContactLayout.Group = createPrimitiveComponent({
  displayName: 'AddContactLayout.Group',
  className: css.addContactLayout__group,
});

AddContactLayout.GroupTitle = createPrimitiveComponent({
  displayName: 'AddContactLayout.GroupTitle',
  className: css.addContactLayout__groupTitle,
});

AddContactLayout.GroupContent = createPrimitiveComponent({
  extendsComponent: FlexFlow,
  direction: 'column',
  gap: 12,
  displayName: 'AddContactLayout.GroupContent',
  className: css.addContactLayout__groupContent,
});
export default AddContactLayout;
