import { defineStore } from "pinia";

import { computed, ref } from "vue";

export const useSheduleStore = defineStore("shedule", () => {
  const selectedDate = ref(new Date());

  const selectedShedule = ref(null);

  const shedule = [
    {
      id: 100000019,
      date: "2025-06-22",
      list: [
        {
          id: 100000000,
          title: "Смешарики в кино",
          time: "11:30",
          rating: "0+",
          hall: 1,
        },
        {
          id: 100000001,
          title: "The Holdovers",
          time: "13:50",
          rating: "16+",
          hall: 2,
        },
        {
          id: 100000002,
          title: "The Batman",
          time: "16:40",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000003,
          title: "Anora",
          time: "19:00",
          rating: "18+",
          hall: 1,
        },
        {
          id: 100000004,
          title: "Oppenheimer",
          time: "21:30",
          rating: "16+",
          hall: 2,
        },
        {
          id: 100000005,
          title: "Past Lives",
          time: "23:50",
          rating: "12+",
          hall: 3,
        },
      ],
    },
    {
      id: 100000020,
      date: "2025-06-23",
      list: [
        {
          id: 100000006,
          title: "Barbie",
          time: "11:00",
          rating: "12+",
          hall: 1,
        },
        {
          id: 100000007,
          title: "Poor Things",
          time: "14:15",
          rating: "18+",
          hall: 2,
        },
        {
          id: 100000008,
          title: "Killers of the Flower Moon",
          time: "17:20",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000009,
          title: "Triangle of Sadness",
          time: "20:30",
          rating: "18+",
          hall: 1,
        },
      ],
    },
    {
      id: 100000021,
      date: "2025-06-24",
      list: [
        {
          id: 100000010,
          title: "Past Lives",
          time: "10:30",
          rating: "12+",
          hall: 2,
        },
        {
          id: 100000011,
          title: "Anatomy of a Fall",
          time: "13:45",
          rating: "18+",
          hall: 3,
        },
        {
          id: 100000012,
          title: "The Holdovers",
          time: "16:50",
          rating: "16+",
          hall: 1,
        },
        { id: 100000013, title: "Love", time: "19:15", rating: "18+", hall: 2 },
      ],
    },
    {
      id: 100000022,
      date: "2025-06-25",
      list: [
        {
          id: 100000014,
          title: "Dune: Part Two",
          time: "12:00",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000015,
          title: "Смешарики в киноooooooooooooooooooooooooooooooo",
          time: "15:10",
          rating: "0+",
          hall: 1,
        },
        {
          id: 100000016,
          title: "Anora",
          time: "18:20",
          rating: "18+",
          hall: 2,
        },
        {
          id: 100000017,
          title: "Oppenheimer",
          time: "21:40",
          rating: "16+",
          hall: 3,
        },
      ],
    },
    {
      id: 100000023,
      date: "2025-06-26",
      list: [
        {
          id: 100000018,
          title: "The Batman",
          time: "11:30",
          rating: "16+",
          hall: 1,
        },
        {
          id: 100000019,
          title: "Poor Things",
          time: "14:45",
          rating: "18+",
          hall: 2,
        },
        {
          id: 100000020,
          title: "Triangle of Sadness",
          time: "17:50",
          rating: "18+",
          hall: 3,
        },
        {
          id: 100000021,
          title: "Barbie",
          time: "20:15",
          rating: "12+",
          hall: 1,
        },
      ],
    },
    {
      id: 100000024,
      date: "2025-06-27",
      list: [
        {
          id: 100000022,
          title: "Killers of the Flower Moon",
          time: "10:15",
          rating: "16+",
          hall: 2,
        },
        {
          id: 100000023,
          title: "Anatomy of a Fall",
          time: "13:30",
          rating: "18+",
          hall: 3,
        },
        {
          id: 100000024,
          title: "The Holdovers",
          time: "16:40",
          rating: "16+",
          hall: 1,
        },
        { id: 100000025, title: "Love", time: "19:00", rating: "18+", hall: 2 },
      ],
    },
    {
      id: 100000025,
      date: "2025-06-28",
      list: [
        {
          id: 100000026,
          title: "Dune: Part Two",
          time: "12:20",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000027,
          title: "Past Lives",
          time: "15:30",
          rating: "12+",
          hall: 1,
        },
        {
          id: 100000028,
          title: "Anora",
          time: "18:45",
          rating: "18+",
          hall: 2,
        },
        {
          id: 100000029,
          title: "Oppenheimer",
          time: "21:50",
          rating: "16+",
          hall: 3,
        },
      ],
    },
    {
      id: 100000026,
      date: "2025-06-29",
      list: [
        {
          id: 100000030,
          title: "The Batman",
          time: "11:00",
          rating: "16+",
          hall: 1,
        },
        {
          id: 100000031,
          title: "Смешарики в кино",
          time: "14:10",
          rating: "0+",
          hall: 2,
        },
        {
          id: 100000032,
          title: "Poor Things",
          time: "17:20",
          rating: "18+",
          hall: 3,
        },
        {
          id: 100000033,
          title: "Triangle of Sadness",
          time: "20:30",
          rating: "18+",
          hall: 1,
        },
      ],
    },
    {
      id: 100000027,
      date: "2025-06-30",
      list: [
        {
          id: 100000034,
          title: "Barbie",
          time: "10:30",
          rating: "12+",
          hall: 2,
        },
        {
          id: 100000035,
          title: "Killers of the Flower Moon",
          time: "13:45",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000036,
          title: "Anatomy of a Fall",
          time: "16:50",
          rating: "18+",
          hall: 1,
        },
        { id: 100000037, title: "Love", time: "19:15", rating: "18+", hall: 2 },
      ],
    },
    {
      id: 100000028,
      date: "2025-07-01",
      list: [
        {
          id: 100000038,
          title: "Dune: Part Two",
          time: "12:00",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000039,
          title: "The Holdovers",
          time: "15:10",
          rating: "16+",
          hall: 1,
        },
        {
          id: 100000040,
          title: "Anora",
          time: "18:20",
          rating: "18+",
          hall: 2,
        },
        {
          id: 100000041,
          title: "Oppenheimer",
          time: "21:40",
          rating: "16+",
          hall: 3,
        },
      ],
    },
    {
      id: 100000029,
      date: "2025-07-02",
      list: [
        {
          id: 100000042,
          title: "Past Lives",
          time: "11:30",
          rating: "12+",
          hall: 1,
        },
        {
          id: 100000043,
          title: "The Batman",
          time: "14:45",
          rating: "16+",
          hall: 2,
        },
        {
          id: 100000044,
          title: "Poor Things",
          time: "17:50",
          rating: "18+",
          hall: 3,
        },
        {
          id: 100000045,
          title: "Triangle of Sadness",
          time: "20:15",
          rating: "18+",
          hall: 1,
        },
      ],
    },
    {
      id: 100000030,
      date: "2025-07-03",
      list: [
        {
          id: 100000046,
          title: "Смешарики в кино",
          time: "10:15",
          rating: "0+",
          hall: 2,
        },
        {
          id: 100000047,
          title: "Killers of the Flower Moon",
          time: "13:30",
          rating: "16+",
          hall: 3,
        },
        {
          id: 100000048,
          title: "Anatomy of a Fall",
          time: "16:40",
          rating: "18+",
          hall: 1,
        },
        { id: 100000049, title: "Love", time: "19:00", rating: "18+", hall: 2 },
      ],
    },
  ];

  function SelectDate(date) {
    selectedDate.value = date;
    selectedShedule.value = shedule.find((item) => item.date === date.fullDate);
    console.log(selectedDate.value);
    console.log(selectedShedule.value);
  }

  return {
    selectedDate,
    selectedShedule,
    SelectDate,
    shedule,
  };
});
