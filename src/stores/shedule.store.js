import { defineStore } from "pinia";

import { computed, ref } from "vue";

export const useSheduleStore = defineStore("shedule", () => {
  const selectedDate = ref(null);

  function SelectDate(date) {
    selectedDate.value = date;
    console.log(selectedDate.value);
  }

  return {
    selectedDate,
    SelectDate,
  };
});
