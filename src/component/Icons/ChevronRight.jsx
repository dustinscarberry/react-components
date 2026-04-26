import React from 'react';
import PropTypes from 'prop-types';

export const IconChevronRight = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 7L14.5 12L9.5 17" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconChevronRight.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconChevronRight;