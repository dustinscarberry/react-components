import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Label = ({text, helpInfo}) => {
  return <label className="rc-label" title={helpInfo}>
    {text}
    {helpInfo &&
      <i className="form-label-help"></i>
    }
  </label>
}

Label.propTypes = {
  /**
   * Label text
   */
  text: PropTypes.string,
  /**
   * Show help bubble text (no bubble if not set)
   */
  helpInfo: PropTypes.string
};

export default Label;