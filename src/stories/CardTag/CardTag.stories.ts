/* eslint-disable @typescript-eslint/no-explicit-any */
import CardTag from '../../components/CardTag/CardTag.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/CardTag',
  component: CardTag,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['text-sm', 'text-base', 'text-lg', 'text-2xl']
    },
    color: {
      control: { type: 'select' },
      options: ['bg-red-300 text-white', 'bg-gray-200', 'bg-blue-300']
    },
    tag: {
      control: { type: 'text' }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CardTag },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <card-tag :class="[args.color,args.size]" v-bind="args">{{args.tag}}</card-tag>
  `
});

export const Primary = Template.bind({}) as any;
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  tag: '#travel',
  size: 'small',
  color: ''
};
