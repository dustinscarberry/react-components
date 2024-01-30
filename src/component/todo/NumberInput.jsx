const NumberInput = ({name, value = '', onChange}) => {
  return <input type="number" className="form-control" name={name} onChange={onChange} value={value}/>
}

export default NumberInput;