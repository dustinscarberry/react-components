import SelectBox from '../component/SelectBox';

export default {
  title: 'Forms/SelectBox',
  component: SelectBox,
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
    value: '',
    options: [
      {key: 1, value: 'One'},
      {key: 2, value: 'Two'},
      {key: 3, value: 'Three'}
    ],
    includeBlank: false,
    onChange: undefined
  }
};

export const WithBlankOption = {
  args: {
    name: 'inputName',
    value: '',
    options: [
      {key: 1, value: 'One'},
      {key: 2, value: 'Two'},
      {key: 3, value: 'Three'}
    ],
    includeBlank: true,
    onChange: undefined
  }
};