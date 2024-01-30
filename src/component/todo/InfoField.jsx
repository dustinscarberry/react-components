const InfoField = ({label, value}) => {
  return <div className="info-field">
    <label className="info-label">{label}</label>
    <span className="info-value">{value}</span>
  </div>
}

export default InfoField;