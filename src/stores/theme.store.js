import { defineStore } from "pinia";

import { computed, ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const BLACK = "black",
    LIGHT = "light";

  const root = document.documentElement;

  const _theme = ref(LIGHT);

  function getTheme() {
    return root.dataset.theme || localStorage.getItem("theme") || LIGHT;
  }

  const isDark = computed(() => _theme.value === BLACK);

  function setTheme(theme) {
    _theme.value = theme;
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }

  function toggleTheme() {
    const theme = getTheme();
    const newTheme = theme === LIGHT ? BLACK : LIGHT;
    setTheme(newTheme);
  }

  function init() {
    const theme = getTheme();
    setTheme(theme);
  }
  return { isDark, toggleTheme, init };
});
