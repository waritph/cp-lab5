<script setup lang="ts">
defineProps<{
  category: string
  organizer: string
}>()
</script>

<template>
  <div class="text-right text-base text-[#555]">
    <div>{{ category }}</div>
    <div>{{ organizer }}</div>
  </div>
</template>

