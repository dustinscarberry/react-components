import SnackBar from '../component/SnackBar';
import React from 'react';

export default {
  title: 'Components/SnackBar',
  component: SnackBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  render: ({...args }) => (
    <div style={{height: '400px'}}>
      <SnackBar {...args}/>
    </div> 
  ),
};

export const Success = {
  args: {
    text: 'Sample notification',
    type: 'success',
    onClose: undefined,
    hideDelay: 5000,
    autoHide: false,
    closeBtn: true,
    location: 'top-center'
  }
};

export const Error = {
  args: {
    text: 'Sample notification',
    type: 'error',
    onClose: undefined,
    hideDelay: 5000,
    autoHide: false,
    closeBtn: true,
    location: 'top-center'
  }
}

export const Warning = {
  args: {
    text: 'Sample notification',
    type: 'warning',
    onClose: undefined,
    hideDelay: 5000,
    autoHide: false,
    closeBtn: true,
    location: 'top-center'
  }
}

export const Notification = {
  args: {
    text: 'Sample notification',
    onClose: undefined,
    hideDelay: 5000,
    autoHide: false,
    closeBtn: true,
    location: 'top-center'
  }
}

export const NotificationDark = {
  args: {
    text: 'Sample notification',
    type: 'notification-dark',
    onClose: undefined,
    hideDelay: 5000,
    autoHide: false,
    closeBtn: true,
    location: 'top-center'
  }
}