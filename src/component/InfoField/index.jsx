import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InfoField = ({ label, value }) => {
  return <div className="info-field">
    <label className="info-label">{label}</label>
    <span className="info-value">{value}</span>
  </div>
}

InfoField.propTypes = {
  /**
   * Label text
   */
  label: PropTypes.string,
  /**
   * Show help bubble text (no bubble if not set)
   */
  value: PropTypes.string
};

export default InfoField;