import classnames from 'classnames';

const QuantityPicker = ({name, value = 0, min = 0, max = 100, onChange, className}) => {
  const incrementValue = (direction) => {
    let newValue;
    if (direction == '+')
      newValue = value + 1;
    else if (direction == '-')
      newValue = value - 1;

    if (newValue >= min && newValue <= max)
      onChange(name, newValue);
  }

  return <div className={classnames('quantity-picker', className)}>
    <button className="increment-btn" onClick={() => incrementValue('-')}>-</button>
    <input value={value} type="number" min="0" onChange={(e) => onChange(name, e.target.value)}/>
    <button className="increment-btn" onClick={() => incrementValue('+')}>+</button>
  </div>
}

export default QuantityPicker;