<template>
  <router-link
    class="link light:link-primary link-animated link-md"
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
