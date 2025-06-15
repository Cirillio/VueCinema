<template>
  <div
    class="flex w-full items-center justify-between shadow-xs black:shadow-neutral-700 bg-white black:bg-neutral-900/50 p-4 rounded-xl"
  >
    <AppLogo />
    <nav class="w-full">
      <ul class="flex items-center space-x-4 w-full justify-center">
        <li>
          <HeaderNavLink to="Movies" />
        </li>
        <li>
          <HeaderNavLink to="About" />
        </li>
      </ul>
    </nav>
    <div class="flex gap-2">
      <TooltipButton icon="person">
        <button class="btn btn-sm btn-text">Profile</button>
        <div class="divider my-1"></div>
        <button class="btn w-full btn-sm btn-error btn-text">Quit</button>
      </TooltipButton>

      <ThemeButton />
    </div>
  </div>
</template>

<script setup>
import AppLogo from "../AppLogo.vue";
import ThemeButton from "../ThemeButton.vue";
import HeaderNavLink from "./HeaderNavLink.vue";
import TooltipButton from "../TooltipButton.vue";
</script>

<style></style>
