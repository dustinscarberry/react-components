import Modal from '../component/Modal';
import React from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({...args }) => (
    <div style={{width: '1000px', height: '750px'}}>
      <Modal {...args}/>
    </div>
  ),
};

export const Basic = {
  args: {
    isOpen: true,
    title: "Demo Modal",
    toggleClose: undefined,
    children: <div style={{minHeight: '500px'}}>Modal Content</div>
  }
};