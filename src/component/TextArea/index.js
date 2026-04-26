import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

export const TextArea = ({name, value = '', onChange}) => {
  return <textarea className="rc-textarea rc-form-control" name={name} onChange={onChange} value={value}/>
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