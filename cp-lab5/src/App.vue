<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import { SpeedInsights } from "@vercel/speed-insights/vue"
const store = useMessageStore()
const { message } = storeToRefs(store)

</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h4 class="text-center font-bold text-gray-700 antialias">Deploy with Vercel</h4>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" :to="{ name: 'about' }">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" :to="{ name: 'students' }">Student</RouterLink>
        </nav>
        <div class="page-size-selector">
          <span>Page Size: </span>
          <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 2 } }">2</RouterLink> |
          <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 3 } }">3</RouterLink> |
          <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 4 } }">4</RouterLink>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>
