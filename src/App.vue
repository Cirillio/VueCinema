<script setup>
import { RouterLink, RouterView } from "vue-router";
import Aside from "./layouts/Aside/Aside.vue";
import Header from "./layouts/Header/Header.vue";
</script>

<template>
  <div class="flex min-h-dvh max-h-dvh p-1 gap-1 sm:p-2 sm:gap-2">
    <Aside />
    <div class="flex flex-col w-full gap-1 sm:gap-2 min-w-0">
      <Header />
      <div
        class="max-h-full flex-1 flex overflow-y-auto [scrollbar-width:none] bg-white black:bg-neutral-900/50 p-2 rounded-md"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
