import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SVG from '@pdffiller/ui-kit/lib/components/SVG';
import LoaderIcon from 'airslate-static.icons/src/16/loader.svg';

import css from './LoadingIcon.module.scss';

const LoadingIcon = ({ isSecondary, ...props }) => {
  return (
    <SVG
      className={classNames(
        css.loadingIcon,
        isSecondary && css.loadingIcon_isSecondary
      )}
      symbol={LoaderIcon}
      {...props}
    />
  );
};

LoadingIcon.propTypes = {
  isSecondary: PropTypes.bool,
};

LoadingIcon.defaultProps = {
  isSecondary: false,
};

export default LoadingIcon;
