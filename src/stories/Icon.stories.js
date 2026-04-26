import IconChevronDown from '../component/Icons/ChevronDown';

export default {
  title: 'Icons/Icon',
  component: IconChevronDown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({...args }) => (
    <div style={{width: '400px'}}>
      <IconChevronDown {...args}/>
    </div>
  ),
  tags: ['!dev']
};

export const Basic = {
  args: {
    color: "#333"
  }
};