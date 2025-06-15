<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/ui/header/Header.vue";
</script>

<template>
  <div class="max-w-3xl mx-auto min-h-dvh flex flex-col p-2">
    <Header />
    <RouterView />
  </div>
</template>
