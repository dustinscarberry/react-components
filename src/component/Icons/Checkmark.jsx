import React from 'react';
import PropTypes from 'prop-types';

export const IconCheckmark = ({ color = '#333', ...otherProps }) => {
  return <svg className="rc-icon" {...otherProps} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

IconCheckmark.propTypes = {
  /**
   * Color of icon
   */
  color: PropTypes.string
}

export default IconCheckmark;