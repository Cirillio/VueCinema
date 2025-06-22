<template>
  <picture class="relative carousel-slide">
    <div
      class="absolute flex items-center p-4 sm:p-6 lg:p-8 left-0 bg-gradient-to-t from-black/75 to-transparent bottom-0 text-shadow-lg w-full h-full"
    >
      <span
        class="text-xs md:text-sm lg:text-base xl:text-lg text-white/80 text-shadow-xs text-shadow-black/75 font-medium mt-auto w-4/5"
        >{{ label }}</span
      >
    </div>
    <router-link class="w-full" :to="to">
      <img :src="img" :alt="img" loading="lazy" class="w-full" />
    </router-link>
  </picture>
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
