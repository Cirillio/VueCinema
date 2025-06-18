<template>
  <div
    class="card group gap-2 sm:max-w-sm bg-white hover:bg-neutral-100 black:hover:bg-neutral-800 black:bg-neutral-800/50 transition-colors p-2"
  >
    <figure class="aspect-video rounded-lg">
      <img
        class="group-hover:scale-105 transition-all"
        :src="'/covers/' + movie.cover"
        :alt="movie.title"
      />
    </figure>
    <div class="card-body gap-1 flex flex-col p-0">
      <router-link
        :to="'/movies/' + movie.id"
        class="card-title text-xl link transition-all link-animated w-fit"
      >
        {{ movie.title }}
      </router-link>
      <p
        class="text-xs h-fit flex flex-0 [&>*]:font-medium [&>*]:text-neutral-600"
      >
        <router-link
          to="/directors"
          class="link link-hover opacity-80 hover:opacity-100 black:opacity-90"
          >{{ movie.director }}</router-link
        >
        <span>, {{ movie.year }}</span>
      </p>
      <div class="divider"></div>
      <p class="text-sm text-neutral-500 black:text-neutral-300">
        {{ movie.description }}
      </p>
      <div class="card-actions mt-auto justify-between">
        <button class="btn btn-sm btn-secondary btn-soft">Rate</button>

        <button
          @click="toggleFav"
          class="btn btn-sm h-fit p-1 aspect-square"
          :class="{
            'btn-outline': !fav,
            'btn-primary': fav,
            'opacity-50 hover:opacity-100 transition-opacity active:opacity-100':
              !fav,
          }"
        >
          <Iconify :name="fav ? 'bookmark-fill' : 'bookmark'" :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Iconify from "../ui/Iconify.vue";

defineProps({
  movie: Object,
});

const fav = ref(false);

const toggleFav = () => {
  fav.value = !fav.value;
};
</script>
