<template>
  <div
    class="w-full max-h-full flex flex-col gap-2 flex-1 shadow-xs black:shadow-neutral-700 bg-white black:bg-neutral-900/50 px-4 py-2 rounded-xl"
  >
    <h2 class="black:text-white text-neutral-600 text-3xl font-semibold">
      Movies
    </h2>
    <div class="divider"></div>
    <div class="join">
      <input
        v-model="search"
        class="input input-sm join-item"
        placeholder="Search"
      />
      <button
        @click="clearSearch"
        class="btn btn-square btn-outline btn-sm btn-error opacity-70 hover:opacity-90 active:opacity-90 transition-opacity join-item"
      >
        <Iconify name="multiply" :size="20" />
      </button>
    </div>

    <div class="divider"></div>
    <div class="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-2">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import Iconify from "../components/ui/Iconify.vue";
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";

import MovieCard from "../components/movies/MovieCard.vue";
const movies = [
  {
    id: 1,
    title: "Anora",
    year: 2024,
    director: "Shaun Baker",
    cover: "anora.jpg",
    description: "Oscar Winner 2024",
  },
  {
    id: 2,
    title: "Triangle of Sadness",
    year: 2022,
    director: "Ruben Östlund",
    cover: "tos.jpg",
    description: "Cannes Winner 2022",
  },
  {
    id: 3,
    title: "Love",
    year: 2015,
    director: "Gaspar Noe",
    cover: "love.jpg",
    description: "A radical provocative movie about love",
  },
  {
    id: 4,
    title: "Prisoners",
    year: 2013,
    director: "Denenis Villeneuve",
    cover: "prisoners.jpg",
    description: "A thriller about the kidnapping of two prisoners",
  },
];

const search = ref("");
const filteredMovies = ref(movies);

const clearSearch = () => {
  search.value = "";
};

// Фильтрация с дебаунсом
watch(
  search,
  useDebounceFn((searchValue) => {
    filteredMovies.value = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, 100)
);
</script>
