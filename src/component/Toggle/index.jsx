import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Toggle = ({name, checked = false, onChange}) => {
  return <div className="toggle-inline-wrapper">
    <div className="ui toggle checkbox">
      <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
      <label></label>
    </div>
  </div>
}

Toggle.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Toggle;