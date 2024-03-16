import Circle from '../component/Circle';

export default {
  title: 'Forms/Circle',
  component: Circle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export const Basic = {
  args: {
    color: '#333'
  }
};