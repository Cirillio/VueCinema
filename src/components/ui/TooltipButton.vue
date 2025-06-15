<template>
  <div class="tooltip [--placement:bottom]">
    <div class="tooltip-toggle">
      <button
        class="btn transition-colors rounded-lg duration-250 btn-soft btn-sm"
        :class="{ 'btn-square': !Label }"
      >
        <Iconify v-if="icon" :name="icon" :size="16" />
        <span v-if="Label">{{ Label }}</span>
      </button>
      <div
        class="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
        role="popover"
      >
        <div
          class="tooltip-body black:bg-neutral-900 bg-base-200 text-base-content/80 w-fit rounded-lg p-2"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Iconify from "./Iconify.vue";

const props = defineProps({
  icon: String,
  Label: String,
});
</script>
