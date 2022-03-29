<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'BoButton'
};
</script>

<script setup lang="ts">
import './button.css';
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  primary: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'small',
    validator: function (value): boolean {
      return ['small', 'medium', 'large'].indexOf(value as string) !== -1;
    }
  },

  backgroundColor: {
    type: String,
    default: 'bg-gray-400'
  }
});

const emit = defineEmits(['update:modelValue', 'click']);

const onClick = () => {
  emit('click');
};

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));
</script>
