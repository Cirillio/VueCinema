<script setup>
import { Icon } from "@iconify/vue";
import Iconify from "./Iconify.vue";
import { useThemeStore } from "../../stores/theme.store";

const themeStore = useThemeStore();
themeStore.init();
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="btn btn-square rounded-lg transition-colors duration-100 btn-soft btn-md"
  >
    <Iconify v-if="themeStore.isDark" name="sun-min" :size="24" />
    <Iconify v-else name="moon" :size="24" />
  </button>
</template>
