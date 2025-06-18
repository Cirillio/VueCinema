<template>
  <router-link
    class="link text-xl hover:link-secondary text-neutral-700 black:text-white link-animated link-xl"
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
