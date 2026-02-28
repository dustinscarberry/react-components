import InfoField from '../component/InfoField';

export default {
  title: 'Forms/InfoField',
  component: InfoField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  render: ({...args }) => (
    <div style={{width: '400px'}}>
      <InfoField {...args}/>
    </div>
  ),
};

export const Basic = {
  args: {
    label: "Filesize",
    value: "300GB"
  }
};