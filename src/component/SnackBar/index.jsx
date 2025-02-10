import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './styles.scss';
import PropTypes from 'prop-types';

const SnackBar = ({
  text,
  type,
  onClose,
  hideDelay = 5000,
  autoHide = false,
  closeBtn = true,
  location = 'top-center'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState();

  useEffect(() => {
    if (text == undefined) return;

    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    if (autoHide == true && hideDelay) {
      setCloseTimeout(setTimeout(() => {
        closeSnackbar();
      }, hideDelay));
    }

  }, [text]);

  const closeSnackbar = () => {
    setIsVisible(false);
    clearTimeout(closeTimeout);

    setTimeout(() => {
      onClose();
    }, 200);
  }

  const getIcon = (type) => {
    if (type == 'error')
      return <svg className="snackbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
    else if (type == 'success')
      return <svg className="snackbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="#ffffff" d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>
    else if (type == 'warning')
      return <svg className="snackbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>
    else if (type == 'notification-dark')
      return <svg className="snackbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
    else
      return <svg className="snackbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path fill="#333333" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
  }

  if (text == undefined) return null;

  return <div className={classnames(
    'snackbar', {
      'is-success': type == 'success',
      'is-error': type == 'error',
      'is-dark-notification': type == 'notification-dark',
      'is-warning': type == 'warning',
      'is-visible': isVisible
    })
  }>
    {getIcon(type)}
    {text}
    {closeBtn && 
      <button onClick={() => closeSnackbar()}></button>
    }
  </div>
}

SnackBar.propTypes = {
  /**
   * SnackBar text
  */
  text: PropTypes.string.isRequired,
  /**
   * SnackBar type ['success', 'notification', 'error']
   */
  type: PropTypes.string.isRequired,
  /**
   * Close function for SnackBar
   */
  onClose: PropTypes.func.isRequired,
  /**
   * How long (in milliseconds) before auto closing
   */
  hideDelay: PropTypes.number,
  /**
   * Auto hide snackbar after hideDelay
   */
  autoHide: PropTypes.bool,
  /**
   * Show close button
   */
  closeBtn: PropTypes.bool,
  /**
   * Location of SnackBar ['top-center']
   */
  location: PropTypes.string
}

export default SnackBar;