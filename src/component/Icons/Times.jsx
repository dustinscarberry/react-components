import React from 'react';
import PropTypes from 'prop-types';

export const IconTimes = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5L5 19M5.00001 5L19 19" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconTimes.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconTimes;