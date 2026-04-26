import React from 'react';
import PropTypes from 'prop-types';

export const IconInfo = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11V17" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.75 8V7H12.25V8H11.75Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconInfo.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconInfo;