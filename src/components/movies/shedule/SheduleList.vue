<template>
  <ul class="divide-base-content/25 flex flex-col w-full divide-y">
    <SheduleLi v-for="movie in shedule" :key="movie.id" :movie="movie" />
  </ul>
</template>

<script setup>
import SheduleLi from "./SheduleLi.vue";

defineProps({
  shedule: {
    type: Object,
    required: true,
  },
});
</script>
