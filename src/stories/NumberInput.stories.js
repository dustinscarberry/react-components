import NumberInput from '../component/NumberInput';

export default {
  title: 'Forms/NumberInput',
  component: NumberInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export const Basic = {
  args: {
    name: 'inputName',
    value: 31,
    onChange: undefined
  }
};