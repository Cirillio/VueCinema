<template>
  <div class="w-full h-full flex flex-col gap-2">
    <PageSubtitle label="Movies" />

    <div class="join">
      <input
        v-model="search"
        class="input w-full min-w-0 min-[400px]:w-fit input-sm join-item"
        placeholder="Search"
      />
      <button
        @click="clearSearch"
        class="btn btn-square btn-outline btn-sm btn-error opacity-70 hover:opacity-90 active:opacity-90 transition-opacity join-item"
      >
        <Iconify name="multiply" :size="20" />
      </button>
    </div>

    <div
      class="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-1"
    >
      <MovieCard
        class="mx-auto"
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import Iconify from "../ui/Iconify.vue";
import PageSubtitle from "../ui/PageSubtitle.vue";
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";

import MovieCard from "../components/movies/MovieCard.vue";
const movies = [
  {
    id: 1,
    title: "Anora",
    year: 2024,
    director: "Sean Baker",
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
    director: "Denis Villeneuve",
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
