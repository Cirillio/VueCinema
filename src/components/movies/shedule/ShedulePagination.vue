<script setup>
import { ref, onMounted } from "vue";
import Iconify from "../../ui/Iconify.vue";
import ShedulePageButton from "./ShedulePageButton.vue";
import { useSheduleStore } from "../../../stores/shedule.store";

const sheduleStore = useSheduleStore();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days_shedule = ref([]);

const addDays = (date, daysToAdd) => {
  const result = new Date(date);
  result.setDate(result.getDate() + daysToAdd);
  return result;
};

const setPaginationShedule = () => {
  const date = new Date();

  days_shedule.value = Array.from({ length: 14 }, (_, i) => {
    const new_day = addDays(date, i);
    return {
      date: new_day.getDate(),
      day: days[new_day.getDay()],
      month: months[new_day.getMonth()],
      year: new_day.getFullYear(),
      fullDate: new_day.toISOString().split("T")[0],
    };
  });
};

onMounted(() => {
  setPaginationShedule();
  sheduleStore.SelectDate({ ...days_shedule.value[0], id: 0 });
});
</script>

<template>
  <div
    id="multi-slide-datetimes-shedule"
    data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": {"xs": 7, "sm": 9, "md": 11, "lg": 5, "xl": 6, "2xl": 7 }, "isDraggable": true }'
    class="relative flex gap-2 w-full min-w-0 mx-auto"
  >
    <!-- Previous Slide -->
    <button
      type="button"
      class="relative sm:flex min-[100px]:hidden carousel-prev carousel-disabled:opacity-50 btn btn-soft flex-1 aspect-square btn-square"
    >
      <Iconify name="arrow-left" :size="20" />
    </button>

    <div class="carousel h-fit rounded-none">
      <div
        class="carousel-body carousel-dragging:transition-none carousel-dragging:cursor-grabbing h-full opacity-0 rounded-none"
      >
        <!-- Slide -->
        <div
          v-for="(day, index) in days_shedule"
          :key="index"
          class="carousel-slide px-1 sm:px-2"
        >
          <ShedulePageButton :day="day" :id="index" />
        </div>
      </div>
    </div>

    <!-- Next Slide -->
    <button
      type="button"
      class="relative sm:flex min-[100px]:hidden carousel-next carousel-disabled:opacity-50 btn btn-soft flex-1 aspect-square btn-square"
    >
      <Iconify name="arrow-right" :size="20" />
    </button>
  </div>
</template>
