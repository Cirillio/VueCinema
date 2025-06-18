<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/header/Header.vue";
</script>

<template>
  <div class="max-w-[1600px] mx-auto min-h-dvh flex flex-col gap-2 p-2">
    <Header />
    <RouterView />
  </div>
</template>
