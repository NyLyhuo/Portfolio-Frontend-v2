<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next'
import { useExperienceStore } from '../../stores/experience'
import { onMounted, ref } from 'vue'
import ExperienceForm from '../../components/ExperienceForm.vue'

const experienceStore = useExperienceStore()
const showModal = ref(false)

function openModal() {
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
onMounted(() => {
  experienceStore.fetchExperience()
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center p-6">
    <div class="mb-6 flex items-center justify-between w-full max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight">Experience</h2>
      <button
        @click="openModal"
        class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow hover:bg-hover transition"
      >
        <Plus class="w-5 h-5" />
        Add Experience
      </button>
    </div>

    <div class="w-full max-w-5xl">
      <table class="min-w-full border-collapse">
        <thead class="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">Role</th>
            <th class="px-6 py-3 text-left font-semibold">Company</th>
            <th class="px-6 py-3 text-left font-semibold">Start Date</th>
            <th class="px-6 py-3 text-left font-semibold">End Date</th>
            <th class="px-6 py-3 text-left font-semibold">Description</th>
            <th class="px-6 py-3 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y text-sm">
          <tr
            v-for="experience in experienceStore.experiences"
            :key="experience.id"
          >
            <td class="px-6 py-4">{{ experience.role }}</td>
            <td class="px-6 py-4">{{ experience.company }}</td>
            <td class="px-6 py-4">{{ experience.start_date }}</td>
            <td class="px-6 py-4">{{ experience.end_date }}</td>
            <td class="px-6 py-4">{{ experience.description }}</td>
            <td class="px-6 py-4 flex gap-2">
              <button
                class="px-4 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                class="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
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
            <h2 class="text-xl font-bold">Create Experience</h2>
            <button
              @click="closeModal"
              class="cursor-pointer hover:text-red-600"
            >
              <X />
            </button>
          </div>
          <ExperienceForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
