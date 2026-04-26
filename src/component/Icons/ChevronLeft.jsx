import React from 'react';
import PropTypes from 'prop-types';

export const IconChevronLeft = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 17L9.5 12L14.5 7" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconChevronLeft.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconChevronLeft;