<template>
  <div
    class="flex flex-col w-full gap-4 items-center justify-center shadow-xs black:shadow-neutral-700 bg-white black:bg-neutral-900/50 p-4 rounded-lg"
  >
    <div class="flex w-full justify-between items-center">
      <ThemeButton />
      <AppLogo />
      <div class="flex gap-2">
        <TooltipButton icon="person">
          <button class="btn btn-sm btn-text">Profile</button>
          <div class="divider my-1"></div>
          <button class="btn w-full btn-sm btn-error btn-text">Quit</button>
        </TooltipButton>
      </div>
    </div>
    <nav class="w-full">
      <ul class="flex items-center space-x-8 w-full justify-center">
        <li>
          <HeaderNavLink to="Movies" />
        </li>
        <li>
          <HeaderNavLink to="About" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import AppLogo from "../ui/AppLogo.vue";
import ThemeButton from "../ui/ThemeButton.vue";
import HeaderNavLink from "./HeaderNavLink.vue";
import TooltipButton from "../ui/TooltipButton.vue";
</script>

<style></style>
