<template>
  <div
    class="w-full flex flex-col overflow-hidden border border-base-content/25 rounded-lg h-full"
  >
    <ul
      class="lg:*:py-3 *:px-3 *:py-1 *:flex *:items-center border-base-content/25 border-b divide-base-content/25 flex w-full divide-x"
    >
      <li class="w-2/3 font-bold">Movie</li>
      <li class="w-1/6 justify-center">Time</li>
      <li class="w-1/6 justify-center">Rating</li>
    </ul>
    <div class="h-full overflow-y-auto flex [scrollbar-width:none]">
      <BadgeAlert
        class="mx-auto lg:my-auto mt-2"
        v-if="!selectedShedule.list"
        text="There are no movies for this day :("
      />
      <SheduleList v-else :shedule="selectedShedule.list" />
    </div>
  </div>
</template>

<script setup>
import BadgeAlert from "../../ui/BadgeAlert.vue";
import SheduleList from "./SheduleList.vue";
import { computed } from "vue";
import { useSheduleStore } from "../../../stores/shedule.store";
const sheduleStore = useSheduleStore();

const selectedShedule = computed(() => {
  return { ...sheduleStore.selectedShedule };
});
</script>
