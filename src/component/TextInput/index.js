import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const TextInput = ({name, value = '', onChange, onBlur, readonly = false, autoFocus, ref}) => {
  return <input
    type="text"
    className="form-control"
    name={name}
    autoFocus={autoFocus}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    readOnly={readonly}
    ref={ref}
  />
}

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  ref: PropTypes.object
}

export default TextInput;