<template>
  <div class="flex flex-col max-w-fit gap-2 flex-1 min-h-full">
    <AppLogo />
    <div class="divider"></div>
    <AsideNav />
    <div class="mt-auto items-center flex gap-2 max-lg:flex-col-reverse">
      <ThemeButton />
      <LogoutButton />
    </div>
  </div>
</template>

<script setup>
import AppLogo from "@/ui/AppLogo.vue";
import AsideNav from "./AsideNav.vue";
import ThemeButton from "@/ui/ThemeButton.vue";
import LogoutButton from "@/components/Profile/LogoutButton.vue";
</script>
