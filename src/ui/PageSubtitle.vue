<template>
  <div class="w-fit min-w-0 flex h-fit flex-col gap-1">
    <h1
      class="md:text-lg text-sm xl:text-2xl font-normal text-dg black:text-white"
    >
      {{ label }}
    </h1>
    <div class="divider divider-secondary"></div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
