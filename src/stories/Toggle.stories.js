import Toggle from '../component/Toggle';

export default {
  title: 'Forms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Basic = {
  args: {
    name: 'inputName',
    checked: true,
    onChange: undefined
  }
};