import React from 'react';
import classNames from 'classnames';

import { createPrimitiveComponent } from '@pdffiller/ui-kit/lib/utils/createPrimitiveComponent';

import Button from '@pdffiller/ui-kit/lib/components/Button';
import SVG from '@pdffiller/ui-kit/lib/components/SVG';

import MoreIcon from 'airslate-static.icons/src/16/more.svg';

import css from './Contact.module.scss';

const Contact = createPrimitiveComponent({
  displayName: 'Contact',
  className: css.contact,
  modifiers: {
    isSelected: css.contact_isSelected,
    isIrrelevant: css.contact_isIrrelevant,
    isLoading: css.contact_isLoading,
  },
});

Contact.AreaButton = createPrimitiveComponent({
  displayName: 'Contact.AreaButton',
  tagName: 'button',
  type: 'button',
  className: css.contact__areaButton,
});

Contact.Checkbox = createPrimitiveComponent({
  displayName: 'Contact.Checkbox',
  className: classNames(css.contact__column, css.contact__column_checkbox),
});

Contact.Avatar = createPrimitiveComponent({
  displayName: 'Contact.Avatar',
  className: classNames(css.contact__column, css.contact__column_avatar),
});

Contact.LeftColumn = createPrimitiveComponent({
  displayName: 'Contact.LeftColumn',
  className: classNames(css.contact__column, css.contact__column_leftColumn),
});

Contact.RightColumn = createPrimitiveComponent({
  displayName: 'Contact.RightColumn',
  className: classNames(css.contact__column, css.contact__column_rightColumn),
});

Contact.OptionsButton = createPrimitiveComponent({
  extendsComponent: Button,
  tagName: Button.defaultProps.tagName || 'button',
  shape: 'square',
  variant: 'borderless',
  children: <SVG symbol={MoreIcon} />,
  displayName: 'ContactListItem.OptionsButton',
  className: css.contact__optionsButton,
});

export default Contact;
