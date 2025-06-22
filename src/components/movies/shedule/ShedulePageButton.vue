<script setup>
import { useSheduleStore } from "../../../stores/shedule.store";
const sheduleStore = useSheduleStore();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  day: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <button
    @click="sheduleStore.SelectDate({ id, ...day })"
    type="button"
    class="btn sm:btn-lg md:btn-xl flex-col gap-0 md:gap-1 p-0 w-full duration-75 aspect-square aria-[current='page']:text-bg-soft-primary"
    :class="{
      'btn-error': day.day === 'Sunday' || day.day === 'Saturday',
      'btn-active btn-primary btn-outline': id === sheduleStore.selectedDate.id,
      'btn-soft': id !== sheduleStore.selectedDate.id,
    }"
  >
    <span class="text-xs sm:text-sm">{{ day.date }}</span>
    <div class="divider w-4/5 mx-auto"></div>
    <span class="sm:text-xs text-[10px] font-normal">{{
      day.day.slice(0, 3)
    }}</span>
  </button>
</template>
