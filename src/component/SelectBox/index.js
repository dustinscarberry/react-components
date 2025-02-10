import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SelectBox = ({name, value = '', options = [], includeBlank = false, onChange}) => {
  const optionNodes = options.map((option, i) => {
    return <option key={i} value={option.key}>{option.value}</option>
  });

  if (includeBlank)
    optionNodes.unshift(<option key="-1" value=""></option>);

  return <div className="select-wrapper">
    <select className="form-control" name={name} onChange={onChange} value={value}>
      {optionNodes}
    </select>
  </div>
}

SelectBox.propTypes = {
  /**
   * Input name
  */
  name: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * Show blank option at top of selectbox
   */
  includeBlank: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default SelectBox;