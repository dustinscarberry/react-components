import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Loader = ({type = 'default'}) => {
  if (type == 'trailing')
    return <div class="rc-sk-chase-loader">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  else if (type == 'squares')
    return <div class="rc-sk-cube-grid-loader">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
  else if (type == 'bounce')
    return <div class="rc-spinner-loader">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  else
    return <div className="rc-default-loader"></div>
}

Loader.propTypes = {
  type: PropTypes.string
}

export default Loader;