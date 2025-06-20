<template>
  <ButtonSoft @click="toProfile" class="btn-sm btn-square btn-primary">
    <Iconify name="person" :size="20" />
  </ButtonSoft>
</template>
<script setup>
import Iconify from "../../ui/Iconify.vue";
import ButtonSoft from "../../ui/Buttons/ButtonSoft.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toProfile = () => {
  router.push("/profile");
};
</script>
