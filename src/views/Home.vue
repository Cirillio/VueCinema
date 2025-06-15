<template>
  <div
    class="w-full h-full flex-1 shadow-xs black:shadow-neutral-700 bg-white black:bg-neutral-900/50 p-4 rounded-xl"
  >
    <div
      id="draggable"
      data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 3000, "dotsItemClasses": "carousel-dot carousel-active:bg-primary", "isDraggable": true }'
      class="relative w-full"
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
                <img src="/covers/love.jpg" alt="" />
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
                <img src="/covers/anora.jpg" alt="" />
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
                <img src="/covers/tos.jpg" alt="" />
              </picture>
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="carousel-pagination sm:flex hidden absolute bottom-3 right-3 scale-75 justify-center gap-3"
      ></div>
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
