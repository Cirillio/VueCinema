<template>
  <header
    class="bg-white black:bg-neutral-900/50 rounded-md p-2 flex w-full gap-2 justify-between items-center"
  >
    <InputSearch />
    <div class="flex gap-2">
      <OrderButton />
      <ProfileButton />
    </div>
  </header>
</template>

<script setup>
import ProfileButton from "@/components/Profile/ProfileButton.vue";
import OrderButton from "@/components/Profile/OrderButton.vue";
import InputSearch from "@/ui/InputSearch.vue";
</script>
