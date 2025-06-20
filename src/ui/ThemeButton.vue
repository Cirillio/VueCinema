<script setup>
import ButtonSoft from "./Buttons/ButtonSoft.vue";
import { useThemeStore } from "../stores/theme.store";
import Iconify from "./Iconify.vue";
const themeStore = useThemeStore();
themeStore.init();
</script>

<template>
  <ButtonSoft
    class="btn-square black:btn-secondary btn-sm"
    @click="themeStore.toggleTheme"
  >
    <Iconify v-if="themeStore.isDark" name="sun-min" :size="20" />
    <Iconify v-else name="moon" :size="20" />
  </ButtonSoft>
</template>
