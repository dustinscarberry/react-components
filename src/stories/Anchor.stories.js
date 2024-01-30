import Anchor from '../component/Anchor';

export default {
  title: 'Forms/Anchor',
  component: Anchor,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Basic = {
  args: {
    link: "https://www.dscarberry.com/",
    children: "Basic Link"
  }
};
