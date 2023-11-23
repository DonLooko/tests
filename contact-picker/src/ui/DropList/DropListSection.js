import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './style.module.scss';

const DropListSection = ({
  // custom
  isHeader,
  isFooter,
  isScrollable,
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
}) => {
  const Component = tagName;

  return (
    <Component
      className={classNames(
        css.dropList__section,
        isHeader && css.dropList__section_isHeader,
        isFooter && css.dropList__section_isFooter,
        isScrollable && css.dropList__section_isScrollable,
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
    >
      {children}
    </Component>
  );
};

DropListSection.propTypes = {
  // custom
  isHeader: PropTypes.bool,
  isFooter: PropTypes.bool,
  isScrollable: PropTypes.bool,
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
};

DropListSection.defaultProps = {
  // custom
  isHeader: false,
  isFooter: false,
  isScrollable: false,
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
};

export default DropListSection;
