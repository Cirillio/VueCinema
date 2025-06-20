<template>
  <ButtonText
    @click="navTo(to)"
    class="btn-md btn-block max-lg:btn-square active:btn-secondary hover:btn-secondary lg:justify-normal"
  >
    <iconify :name="icon" :size="20" />
    <span class="max-lg:hidden">{{ label }}</span>
  </ButtonText>
</template>

<script setup>
import Iconify from "../../ui/Iconify.vue";
import ButtonText from "../../ui/Buttons/ButtonText.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function navTo(to) {
  router.replace("/" + to.toLowerCase());
}

defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
