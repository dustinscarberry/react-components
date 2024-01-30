import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const TextArea = ({name, value = '', onChange}) => {
  return <textarea className="form-control" name={name} onChange={onChange} value={value}/>
}

TextArea.propTypes = {
  /**
   * Input name
  */
  name: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextArea;