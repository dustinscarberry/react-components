import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconTimes } from '../Icons/Times';
import './styles.scss';

export const Modal = ({ isOpen = false, title = "", toggleClose = undefined, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape')
      toggleClose();
  };

  if (!isOpen) return null;

  return <div className="rc-modal" onClick={toggleClose}>
    <div className="rc-modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="rc-modal-title">{title}</div>
      <IconTimes onClick={toggleClose} className="rc-modal-close-btn"/>
      {children}
    </div>
  </div>
}

Modal.propTypes = {
  /**
   * Whether modal is open or not
  */
  isOpen: PropTypes.bool,
  /**
   * Modal title text
  */
  title: PropTypes.string,
  /**
   * Toggle modal function
  */
  toggleClose: PropTypes.func.isRequired,
  /**
   * Modal content
  */
  children: PropTypes.node
}

export default Modal;