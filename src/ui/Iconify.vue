<template>
  <Icon :icon="'f7:' + name" :width="size" :height="size" />
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  name: String,
  size: Number,
});
</script>
