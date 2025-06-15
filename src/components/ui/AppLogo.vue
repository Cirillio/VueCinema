<template>
  <router-link
    to="/"
    class="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-100"
  >
    <Iconify class="black:text-secondary" name="videocam-circle" :size="28" />
    <span
      class="text-xl font-bold text-nowrap black:text-secondary text-shadow-xs"
    >
      Vue Movie
    </span>
  </router-link>
</template>

<script setup>
import Iconify from "./Iconify.vue";
</script>
