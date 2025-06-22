<template>
  <router-link :to="'/shedule/' + movie.id">
    <li
      class="w-full flex xl:text-base text-xs sm:text-sm items-center px-1 lg:*:p-2 *:py-1 rounded-md hover:bg-neutral/10 transition-all duration-150 cursor-pointer active:scale-99 group"
    >
      <span class="w-2/3 overflow-x-hidden flex items-center gap-2">
        <span
          class="badge max-sm:badge-xs group-hover:opacity-100 opacity-75 rounded-full badge-accent badge-soft min-w-12 max-sm:min-w-9"
          >{{ movie.rating }}</span
        >
        <span class="truncate">
          {{ movie.title }}
        </span></span
      >
      <span class="w-1/6 text-center">{{ movie.time }}</span>
      <span class="w-1/6 text-center">{{ movie.hall }}</span>
    </li>
  </router-link>
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
      hall: "undefined",
    }),
  },
});
</script>
