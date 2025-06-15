<template>
  <router-link
    to="/"
    class="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-100"
  >
    <Iconify
      class="text-primary black:text-white"
      name="videocam-circle"
      size="28"
    />
    <span
      class="text-xl font-bold text-nowrap black:text-white text-primary text-shadow-xs"
    >
      Vue Movie
    </span>
  </router-link>
</template>

<script setup>
import Iconify from "./Iconify.vue";
</script>
