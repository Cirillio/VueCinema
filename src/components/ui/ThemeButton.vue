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
    class="btn btn-square rounded-lg transition-colors duration-250 btn-soft btn-sm"
  >
    <Iconify v-if="themeStore.isDark" name="sun-min" size="16" />
    <Iconify v-else name="moon" size="16" />
  </button>
</template>
