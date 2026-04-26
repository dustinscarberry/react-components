import React from 'react';
import PropTypes from 'prop-types';

export const IconWarning = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} focusable="false" width="50px" height="50px" aria-hidden="true" viewBox="0 0 24 24">
    <path fill={color} d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
  </svg>
}

IconWarning.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconWarning;