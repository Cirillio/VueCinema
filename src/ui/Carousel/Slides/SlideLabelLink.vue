<template>
  <router-link class="carousel-slide" :to="to">
    <picture class="relative">
      <span
        class="absolute left-4 bottom-4 lg:left-10 lg:bottom-10 text-shadow-lg text-sm sm:text-lg lg:text-4xl text-white font-bold"
        >{{ label }}</span
      >
      <img :src="img" :alt="img" loading="lazy" class="w-full" />
    </picture>
  </router-link>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
