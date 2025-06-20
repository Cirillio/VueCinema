<template>
  <div class="badge badge-md lg:badge-xl badge-error">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: "Error had occurred",
  },
});
</script>
