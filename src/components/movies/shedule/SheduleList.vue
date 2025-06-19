<template>
  <ul class="divide-base-content/25 flex flex-col w-full divide-y">
    <SheduleLi v-for="movie in shedule" :key="movie.id" :movie="movie" />
    <router-link to="/shedule" class="mt-auto py-2 mx-auto">
      <li class="btn btn-primary btn-sm rounded-lg">Details</li>
    </router-link>
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
