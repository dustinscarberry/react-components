const MinimalDropdown = ({items = [], value, name, onChange}) => {
  const optionNodes = items.map((item, i) => {
    return <option key={i} value={item.value}>{item.text}</option>
  });

  return <div className="minimal-dropdown">
    <select className="form-control" value={value} name={name} onChange={onChange}>
      {optionNodes}
    </select>
  </div>
}

export default MinimalDropdown;