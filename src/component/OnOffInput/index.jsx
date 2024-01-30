import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './styles.css';

const OnOffInput = ({name, value = true, onChange}) => {
  return <div className="onoff-input">
    <button className={classnames({'is-selected': !value})} onClick={() => onChange(name, false)}>Off</button>
    <button className={classnames({'is-selected': value})} onClick={() => onChange(name, true)}>On</button>
  </div>
}

OnOffInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default OnOffInput;