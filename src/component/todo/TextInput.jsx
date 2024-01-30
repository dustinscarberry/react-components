const TextInput = ({name, value = '', onChange, onBlur, readonly = false, autoFocus}) => {
  return <input
    type="text"
    className="form-control"
    name={name}
    autoFocus={autoFocus}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    readOnly={readonly}
  />
}

export default TextInput;