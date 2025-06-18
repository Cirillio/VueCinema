<template>
  <div
    class="w-full h-full flex-1 shadow-xs black:shadow-neutral-700 bg-white black:bg-neutral-900/50 p-1 md:p-4 rounded-lg"
  >
    <div class="lg:grid flex flex-col lg:grid-cols-5 gap-4">
      <div
        id="draggable"
        data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "isAutoPlay": true, "speed": 3000, "dotsItemClasses": "carousel-dot carousel-active:bg-primary", "isDraggable": true }'
        class="relative col-span-3"
      >
        <div class="carousel rounded-lg aspect-video">
          <div
            class="carousel-body h-full opacity-0 carousel-dragging:transition-none carousel-dragging:cursor-grabbing"
          >
            <!-- Slide 1 -->
            <div class="carousel-slide">
              <router-link to="/movie/123">
                <picture class="relative">
                  <span
                    class="absolute left-10 bottom-10 text-shadow-lg text-4xl text-white font-bold"
                    >Premier!</span
                  >
                  <img src="/covers/love.jpg" alt="" class="w-full" />
                </picture>
              </router-link>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-slide">
              <router-link to="/movie/123">
                <picture class="relative">
                  <span
                    class="absolute left-10 bottom-10 text-shadow-lg text-4xl text-white font-bold"
                    >Premier!</span
                  >
                  <img src="/covers/anora.jpg" alt="" class="w-full" />
                </picture>
              </router-link>
            </div>
            <!-- Slide 3 -->
            <div class="carousel-slide">
              <router-link to="/movie/123">
                <picture class="relative">
                  <span
                    class="absolute left-10 bottom-10 text-shadow-lg text-4xl text-white font-bold"
                    >Premier!</span
                  >
                  <img src="/covers/tos.jpg" alt="" class="w-full" />
                </picture>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="carousel-pagination sm:flex hidden absolute bottom-3 right-3 scale-75 justify-center gap-3"
        ></div>
      </div>
      <div class="col-start-4 col-span-2 flex flex-col gap-2">
        <ShedulePagination />

        <div class="w-full flex justify-between items-baseline">
          <span class="font-semibold italic text-md md:text-lg xl:text-2xl">
            Nearest cinema
          </span>
          <span class="text-sm md:text-md xl:text-xl font-bold"
            >{{ sheduleDate.date }}, {{ sheduleDate.day }}
            {{ sheduleDate.month }} {{ sheduleDate.year }}</span
          >
        </div>

        <div class="card h-full bg-transparent shadow-none">
          <div
            class="w-full black:bg-neutral-800 bg-neutral-100 h-full rounded-lg overflow-x-auto"
          >
            <table class="table">
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>Time</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="lg:text-lg font-semibold">Love</span></td>
                  <td><span class="lg:text-lg">18:50</span></td>
                  <td>
                    <span
                      class="badge badge-error badge-sm lg:badge-md badge-outline rounded-full"
                      >18+</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-dot {
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
}

.carousel-dot:not(.carousel-active):hover {
  opacity: 1;
  background-color: var(--color-primary);
}
</style>

<script setup>
import { computed } from "vue";
import ShedulePagination from "../components/movies/shedule/ShedulePagination.vue";
import { useSheduleStore } from "../stores/shedule.store";

const sheduleStore = useSheduleStore();

const sheduleDate = computed(() => ({ ...sheduleStore.selectedDate }));
</script>
