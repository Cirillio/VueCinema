<template>
  <ButtonText @click="toOrders" class="btn-sm btn-square black:btn-secondary">
    <Iconify name="bag" :size="20" />
  </ButtonText>
</template>

<script setup>
import ButtonText from "../../ui/Buttons/ButtonText.vue";
import Iconify from "../../ui/Iconify.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toOrders = () => {
  router.push("/orders");
};
</script>
