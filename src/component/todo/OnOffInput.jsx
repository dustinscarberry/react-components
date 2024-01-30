import classnames from 'classnames';

const OnOffInput = ({name, value = true, onChange}) => {
  return <div className="onoff-input">
    <button className={classnames({'is-selected': !value})} onClick={() => onChange(name, false)}>Off</button>
    <button className={classnames({'is-selected': value})} onClick={() => onChange(name, true)}>On</button>
  </div>
}

export default OnOffInput;