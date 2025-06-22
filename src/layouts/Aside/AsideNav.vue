<template>
  <nav class="w-full">
    <ul class="flex flex-col items-center w-full gap-2">
      <li class="w-full">
        <AsideNavLink to="" label="Home" icon="house-alt" />
      </li>
      <li class="w-full">
        <AsideNavLink to="Shedule" label="Shedule" icon="square-list" />
      </li>
      <li class="w-full">
        <AsideNavLink to="Movies" label="Movies" icon="play" />
      </li>

      <div class="divider"></div>

      <li class="w-full">
        <AsideNavLink to="z" label="Settings" icon="gear-alt" />
      </li>
      <li class="w-full">
        <AsideNavLink to="About" label="About" icon="info-circle" />
      </li>
    </ul>
  </nav>
</template>
<script setup>
import AsideNavLink from "./AsideNavLink.vue";
</script>
