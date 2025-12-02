<script setup lang="ts">
import { onMounted } from 'vue'
import { useEducationStore } from '../../stores/education'

const educationStore = useEducationStore()

onMounted(() => {
  educationStore.fetchEducation()
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center p-6">
    <div class="flex items-center justify-between mb-6 w-full max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight">Education</h2>
      <button
        class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow hover:bg-hover transition"
      >
        Add Education
      </button>
    </div>

    <div class="w-full max-w-5xl">
      <table class="min-w-full border-collapse">
        <thead class="bg-gray100 text-gray-600 text-sm">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">School name</th>
            <th class="px-6 py-3 text-left font-semibold">Degree</th>
            <th class="px-6 py-3 text-left font-semibold">major</th>
            <th class="px-6 py-3 text-left font-semibold">Start Date</th>
            <th class="px-6 py-3 text-left font-semibold">End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="education in educationStore.educations"
            :key="education.id"
          >
            <td class="px-6 py-4">{{ education.school_name }}</td>
            <td class="px-6 py-4">{{ education.degree }}</td>
            <td class="px-6 py-4">{{ education.major }}</td>
            <td class="px-6 py-4">{{ education.start_date }}</td>
            <td class="px-6 py-4">{{ education.end_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
