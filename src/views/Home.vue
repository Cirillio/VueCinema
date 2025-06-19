<template>
  <div
    class="w-full h-full flex-1 shadow-xs black:shadow-neutral-700 bg-white black:bg-neutral-900/50 p-1 md:p-4 rounded-lg"
  >
    <div class="lg:grid flex flex-col lg:grid-cols-5 gap-4">
      <div
        id="draggable"
        data-carousel='{ "loadingClasses": "opacity-0", "isInfiniteLoop": true, "isAutoPlay": true, "speed": 3000, "dotsItemClasses": "carousel-dot carousel-active:bg-primary", "isDraggable": true }'
        class="relative col-span-3 h-fit"
      >
        <div
          ref="movieCarouselElement"
          class="carousel rounded-lg aspect-video"
        >
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
      <div
        ref="sheduleElement"
        :style="sheduleElementHeight"
        class="col-start-4 col-span-2 flex flex-col gap-2"
      >
        <ShedulePagination />
        <span class="badge badge-lg badge-primary mx-auto"
          >{{ sheduleDate.date }}, {{ sheduleDate.day }}
          {{ sheduleDate.month }} {{ sheduleDate.year }}</span
        >
        <SheduleTable />
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
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useSheduleStore } from "../stores/shedule.store";
import ShedulePagination from "../components/movies/shedule/ShedulePagination.vue";
import SheduleTable from "../components/movies/shedule/SheduleTable.vue";

const sheduleStore = useSheduleStore();

const sheduleDate = computed(() => ({ ...sheduleStore.selectedDate }));

const movieCarouselElement = ref(null);
const sheduleElement = ref(null);
const sheduleElementHeight = ref({});

let resizeObserver = null;

onMounted(() => {
  resizeObserver = new ResizeObserver((entries) => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      sheduleElementHeight.value = { height: "auto" };

      return;
    }

    // Получаем новую высоту карусели
    const newHeight = entries[0].contentRect.height + "px";

    // Обновляем высоту блока расписания
    sheduleElementHeight.value = { height: newHeight };
  });

  // Начинаем наблюдение за каруселью
  if (movieCarouselElement.value) {
    resizeObserver.observe(movieCarouselElement.value);
  }
});

onBeforeUnmount(() => {
  // Очищаем наблюдатель при размонтировании
  if (resizeObserver) resizeObserver.disconnect();
});
</script>
