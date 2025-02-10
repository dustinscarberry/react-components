import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const NumberInput = ({name, value = undefined, onChange}) => {
  return <input type="number" className="form-control" name={name} onChange={onChange} value={value}/>
}

NumberInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default NumberInput;