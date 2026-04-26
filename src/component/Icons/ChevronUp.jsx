import React from 'react';
import PropTypes from 'prop-types';

export const IconChevronUp = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14.5L12 9.5L17 14.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconChevronUp.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconChevronUp;