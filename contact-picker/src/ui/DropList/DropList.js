import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createPrimitiveComponent } from '@pdffiller/ui-kit/lib/utils/createPrimitiveComponent';

import css from './style.module.scss';
import DropListSection from './DropListSection';

const DropList = ({
  // custom
  edges,
  isDisabled,
  // style
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  // html
  tagName,
  style,
  className,
  children,
  dataQaTag,
}) => {
  const Component = tagName;

  return (
    <Component
      className={classNames(
        css.dropList,
        edges && css[`dropList_edges_${edges}`],
        isDisabled && css.dropList_isDisabled,
        (height || maxHeight) && css.dropList_hasHeight,
        className
      )}
      style={{
        height,
        minHeight,
        maxHeight,
        width,
        minWidth,
        maxWidth,
        ...style,
      }}
      data-qa-tag={dataQaTag}
    >
      {children}
    </Component>
  );
};

DropList.propTypes = {
  // custom
  edges: PropTypes.oneOf(['rounded', 'sharp', 'soft']),
  isDisabled: PropTypes.bool,
  // style
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // html
  tagName: PropTypes.elementType,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  dataQaTag: PropTypes.string,
};

DropList.defaultProps = {
  // custom
  edges: 'rounded',
  isDisabled: false,
  // style
  height: null,
  maxHeight: null,
  minHeight: null,
  width: null,
  minWidth: null,
  maxWidth: null,
  // html
  tagName: 'div',
  className: null,
  style: null,
  children: null,
  dataQaTag: null,
};

DropList.Section = createPrimitiveComponent({
  displayName: 'DropList.Section',
  className: css.dropList__section,
});

DropList.Item = createPrimitiveComponent({
  displayName: 'DropList.Item',
  className: css.dropList__item,
  modifiers: {
    isDisabled: css.dropList__item_isDisabled,
  },
});

DropList.Title = createPrimitiveComponent({
  displayName: 'DropList.Title',
  className: css.dropList__title,
});

DropList.Text = createPrimitiveComponent({
  displayName: 'DropList.Text',
  className: css.dropList__text,
});

DropList.Button = createPrimitiveComponent({
  displayName: 'DropList.Button',
  tagName: 'button',
  type: 'button',
  className: css.dropList__input,
});

DropList.Radio = createPrimitiveComponent({
  displayName: 'DropList.Radio',
  tagName: 'input',
  type: 'radio',
  role: 'option',
  className: css.dropList__input,
});

DropList.Checkbox = createPrimitiveComponent({
  displayName: 'DropList.Checkbox',
  tagName: 'input',
  type: 'checkbox',
  role: 'option',
  className: css.dropList__input,
});

DropList.Section = DropListSection;
DropList.Section.displayName = 'DropList.Section';

export default DropList;
