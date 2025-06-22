<template>
  <div :data-carousel="dataCarousel" class="relative flex flex-col gap-2 h-fit">
    <!-- Carousel -->
    <div class="carousel rounded-lg" :class="`aspect-${aspect}`">
      <div
        class="carousel-body overfly h-full opacity-0"
        :class="{
          'carousel-dragging:transition-none carousel-dragging:cursor-grabbing':
            drag,
        }"
      >
        <!-- Slides -->
        <slot />
      </div>
    </div>

    <!-- Prev -->
    <button
      v-if="buttons"
      type="button"
      class="carousel-prev carousel-disabled:opacity-0 rounded-l-lg duration-500 transition-opacity bg-base-100 flex items-center justify-center h-full left-0 w-4 sm:w-10 rounded-none opacity-10 hover:opacity-50"
    >
      <Iconify name="chevron-left" :size="16" />
    </button>
    <!-- Next -->
    <button
      v-if="buttons"
      type="button"
      class="carousel-next carousel-disabled:opacity-0 rounded-r-lg duration-500 transition-opacity bg-base-100 flex items-center justify-center h-full w-4 sm:w-10 right-0 rounded-none opacity-10 hover:opacity-50"
    >
      <Iconify name="chevron-right" :size="16" />
    </button>

    <!-- Dots -->
    <div
      v-if="dots"
      class="carousel-pagination flex absolute bottom-1 sm:bottom-3 right-1/2 translate-x-1/2 scale-50 sm:scale-75 justify-center gap-3"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Iconify from "../Iconify.vue";

const props = defineProps({
  loop: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: Number,
    default: 3000,
  },
  drag: {
    type: Boolean,
    default: false,
  },
  dots: {
    type: Boolean,
    default: false,
  },
  buttons: {
    type: Boolean,
    default: false,
  },
  aspect: {
    type: String,
    default: "auto",
  },
});

const dataCarousel = computed(() => {
  return JSON.stringify({
    isInfiniteLoop: props.loop,
    isAutoPlay: props.autoplay,
    speed: props.speed,
    isDraggable: props.drag,
    // Another params
    loadingClasses: "opacity-0",
    dotsItemClasses: "carousel-dot carousel-active:bg-primary",
  });
});
</script>

<style scoped>
.carousel-dot {
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
}

.carousel-dot:not(.carousel-active):hover {
  opacity: 1;
  background-color: var(--color-primary);
}
</style>
