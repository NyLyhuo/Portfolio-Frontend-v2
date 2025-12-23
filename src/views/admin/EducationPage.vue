<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useEducationStore } from '../../stores/education'
import EducationForm from '../../components/EducationForm.vue'

const educationStore = useEducationStore()
const showModal = ref(false)

function openCreateModal() {
  showModal.value = true
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
onMounted(() => {
  educationStore.fetchEducation()
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center p-6">
    <div class="flex items-center justify-between mb-6 w-full max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight">Education</h2>
      <button
        @click="openCreateModal"
        class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow hover:bg-hover transition"
      >
        Add Education
      </button>
    </div>

    <div class="w-full max-w-5xl">
      <table class="min-w-full border-collapse divide-y divide-gray-200">
        <thead class="bg-gray100 text-gray-600 text-sm">
          <tr class="hover:bg-gray50 transition">
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              School name
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Degree
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              major
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Start Date
            </th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              End Date
            </th>
            <th class="px-6 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y text-sm">
          <tr
            v-for="education in educationStore.educations"
            :key="education.id"
          >
            <td class="px-6 py-4">
              {{ education.school_name }}
            </td>
            <td class="px-6 py-4">{{ education.degree }}</td>
            <td class="px-6 py-4">{{ education.major }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ formatDate(education.start_date) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ formatDate(education.end_date) }}
            </td>
            <td class="px-6 py-4 flex item-center gap-3">
              <button
                class="px-3 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-600 active:scale-95 transition"
                @click="null"
              >
                Edit
              </button>
              <button
                class="px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 active:bg-red-600 active:scale-95 transition"
                @click="null"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showModal">
      <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-lg"
        >
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Add New Education</h2>
            <button>X</button>
          </div>
          <EducationForm />
        </div>
      </div>
    </div>
  </div>
</template>
