<template>
  <div
    class="flex items-center gap-0.5 select-none justify-center max-lg:aspect-square"
  >
    <Iconify
      class="black:text-secondary text-dg max-lg:mx-auto black:group-hover:text-dg duration-150"
      name="videocam-circle"
      :size="24"
    />
    <span
      class="text-lg uppercase font-semibold tracking-tight max-lg:hidden text-nowrap text-dg black:group-hover:text-dg duration-150 black:text-secondary text-shadow-xs"
    >
      Vue Movie
    </span>
  </div>
</template>

<script setup>
import Iconify from "./Iconify.vue";
</script>
