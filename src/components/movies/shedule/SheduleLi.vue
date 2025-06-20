<template>
  <li
    class="w-full flex xl:text-base text-sm items-center *:px-3 *:py-1 lg:*:py-3 hover:bg-base-content/10 transition-colors duration-100"
  >
    <span class="w-2/3 overflow-x-hidden flex"
      ><router-link
        class="link link-animated truncate"
        to="/shedule/{{ movie.id }}"
      >
        {{ movie.title }}
      </router-link></span
    >
    <span class="w-1/6 text-center">{{ movie.time }}</span>
    <span class="w-1/6 text-center">{{ movie.rating }}</span>
  </li>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: "undefined",
      time: "undefined",
      rating: "undefined",
    }),
  },
});
</script>
