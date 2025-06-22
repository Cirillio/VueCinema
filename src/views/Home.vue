<template>
  <div class="flex-1 justify-start flex flex-col min-w-0">
    <div class="lg:grid h-fit min-w-0 flex flex-col lg:grid-cols-5 gap-2">
      <div class="w-full col-span-3 flex flex-col gap-2">
        <PageSubtitle label="Today in Cinema" />
        <div ref="movieCarouselElement" class="h-fit">
          <Carousel
            aspect="video"
            :loop="true"
            :autoplay="true"
            :dots="true"
            :speed="5000"
          >
            <SlideLabelLink
              v-for="prem in premiers"
              :key="prem.id"
              :to="'/shedule/' + prem.id"
              :img="prem.image"
              :label="prem.label"
            />
          </Carousel>
        </div>
      </div>

      <div class="col-start-4 col-span-2 flex flex-col gap-2">
        <PageSubtitle label="Shedule" />
        <div class="flex flex-col gap-2 flex-1" ref="sheduleElement">
          <ShedulePagination />
          <span class="badge badge-sm lg:badge-lg badge-primary mx-auto"
            >{{ sheduleDate.date }}, {{ sheduleDate.day }}
            {{ sheduleDate.month }} {{ sheduleDate.year }}</span
          >
          <SheduleTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useSheduleStore } from "@/stores/shedule.store";
import { useHeightRef } from "@/composables/useHeightRef";
import PageSubtitle from "@/ui/PageSubtitle.vue";
import ShedulePagination from "@/components/movies/shedule/ShedulePagination.vue";
import SheduleTable from "../components/movies/shedule/SheduleTable.vue";
import Carousel from "../ui/Carousel/Carousel.vue";
import SlideLabelLink from "../ui/Carousel/Slides/SlideLabelLink.vue";

const sheduleStore = useSheduleStore();

const sheduleDate = computed(() => ({ ...sheduleStore.selectedDate }));

const movieCarouselElement = ref(null);
const sheduleElement = ref(null);

useHeightRef(movieCarouselElement, sheduleElement, 1024);

const premiers = [
  {
    id: 0,
    movie: "Love",
    image: "/covers/love.jpg",
    label: "Gaspar Noe`s Love has returned to the cinema!",
  },
  {
    id: 1,
    movie: "Anora",
    image: "/covers/anora.jpg",
    label: "Saun Baker`s Anora, a new Oscar Winner, is coming to the cinema!",
  },
  {
    id: 2,
    movie: "Triangle of Sadness",
    image: "/covers/tos.jpg",
    label:
      "Hot satiric movie about love and the corrupting influence of wealth, winner of the Palme d'Or at the 2022 Cannes Film Festival",
  },
];
</script>
