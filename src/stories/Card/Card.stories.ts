/* eslint-disable @typescript-eslint/no-explicit-any */
import MyCard from '../../components/Card/Card.vue';
import CardTag from '../../components/CardTag/CardTag.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: MyCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCard, CardTag },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <my-card v-bind="args">
    <template v-slot:image><img class="w-full" :src="args.imageUrl" alt="Sunset in the mountains"></template>
    <template v-slot:title>{{args.title}}</template>
    <template v-slot:description>{{args.description}}</template>
    <template v-slot:tags>
        <card-tag v-for="tag in args.tags">{{tag}}</card-tag>
    </template>
  </my-card>`
});

export const Primary = Template.bind({}) as any;
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  title: 'The Coldest Sunset',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  imageUrl: 'https://via.placeholder.com/100',
  tags: ['#travel', '#winter', '#photography']
};
