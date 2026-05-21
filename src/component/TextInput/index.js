import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

export const TextInput = ({name, value = '', onChange, readOnly = false, autoFocus, ...otherProps}) => {
  return <input
    type="text"
    className="rc-form-control"
    name={name}
    autoFocus={autoFocus}
    onChange={onChange}
    value={value}
    readOnly={readOnly}
    {...otherProps}
  />
}

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
}

export default TextInput;