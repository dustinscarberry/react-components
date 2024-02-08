import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Circle = ({color}) => {
  return <div class="circle" style={{background: color}}></div>
}

Circle.propTypes = {
  /**
   * Circle color
   */
  color: PropTypes.string
};

export default Circle;