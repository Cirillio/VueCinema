<template>
  <ButtonOutline class="btn-sm btn-error max-lg:btn-square">
    <Iconify name="square-arrow-left" :size="20" />
    <span class="max-lg:hidden">Logout</span>
  </ButtonOutline>
</template>

<script setup>
import Iconify from "../../ui/Iconify.vue";
import ButtonOutline from "../../ui/Buttons/ButtonOutline.vue";
</script>
