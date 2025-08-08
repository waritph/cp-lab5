<script setup lang="ts">
import type { Student } from '@/type'
defineProps<{
  student: Student
}>()
// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 28, 2022',
//   time: '12:00',
//   petsAllowed: true,
//   organizer: 'Kat Laydee',
// })
</script>

<template>
  <div class="event-class">
    <div class="Student-card">
      <h2>{{ student.name }} {{ student.surname }}</h2>
      <h3>{{ student.gpa }}</h3>
    </div>
  </div>
</template>
