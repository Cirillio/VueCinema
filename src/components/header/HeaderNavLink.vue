<template>
  <router-link
    class="link hover:link-secondary link-animated link-md"
    :to="'/' + to.toLowerCase()"
    >{{ to }}</router-link
  >
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
