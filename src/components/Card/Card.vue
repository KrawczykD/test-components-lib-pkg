<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <slot name="image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <slot name="title" />
      </div>
      <p class="text-gray-700 text-base">
        <slot name="description" />
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <slot name="tags" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BoCard'
};
</script>
