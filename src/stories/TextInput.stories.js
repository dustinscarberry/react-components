import TextInput from '../component/TextInput';

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Basic = {
  args: {
    name: 'inputName',
    value: 'Lorem ipsum dolor sit amet',
    onChange: () => {},
  }
};