import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({link, children}) => {
  return <a href={link}>{children}</a>
}

Anchor.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node
}

export default Anchor;