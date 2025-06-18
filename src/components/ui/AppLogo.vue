<template>
  <router-link to="/" class="flex items-center gap-2 cursor-pointer group">
    <Iconify
      class="black:text-secondary text-dg group-hover:text-secondary black:group-hover:text-dg duration-150"
      name="videocam-circle"
      :size="24"
    />
    <span
      class="text-3xl uppercase font-extrabold text-nowrap text-dg group-hover:text-secondary black:group-hover:text-dg duration-150 black:text-secondary text-shadow-xs"
    >
      Vue Movie
    </span>
  </router-link>
</template>

<script setup>
import Iconify from "./Iconify.vue";
</script>
