import React from 'react';
import PropTypes from 'prop-types';

export const IconChevronDown = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 9.5L12 14.5L7 9.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconChevronDown.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconChevronDown;