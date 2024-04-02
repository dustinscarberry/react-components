import Loader from '../component/Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['default', 'trailing', 'squares'],
      control: { type: 'radio' }
    }
  }
};

export const Default = {
  args: {
    type: 'default',
  }
};

export const Trailing = {
  args: {
    type: 'trailing'
  }
}

export const Squares = {
  args: {
    type: 'squares'
  }
}
