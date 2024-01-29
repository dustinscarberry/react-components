import React from 'react';
import PropTypes from 'prop-types';

const Label = ({text, helpInfo}) => {
  return <label>
    {text}
    {helpInfo &&
      <i className="form-label-help fas fa-question-circle"></i>
    }
  </label>
}

Label.propTypes = {
  /**
   * Label text
   */
  text: PropTypes.string,
  /**
   * Show help bubble or not
   */
  helpInfo: PropTypes.bool
};

export default Label;