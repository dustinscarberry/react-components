import React from 'react';
import PropTypes from 'prop-types';

export const IconTimes = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L16.8995 7.10051" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7.00001L16.8995 16.8995" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconTimes.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconTimes;