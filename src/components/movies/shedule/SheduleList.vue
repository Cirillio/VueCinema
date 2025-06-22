<template>
  <ul class="p-1 lg:p-2 gap-2 flex flex-col w-full">
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
