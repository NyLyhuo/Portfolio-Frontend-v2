<script setup lang="ts">
import { reactive } from 'vue'
import { useEducationStore } from '../stores/education'

const educationStore = useEducationStore()
const formData = reactive({
  school_name: '',
  degree: '',
  major: '',
  start_date: '',
  end_date: '',
})

function clearForm() {
  Object.assign(formData, {
    school_name: '',
    degree: '',
    major: '',
    start_date: '',
    end_date: '',
  })
}

function handleSubmit() {
  educationStore.createEducation(formData)
  clearForm()
}
</script>

<template>
  <form class="space-y-6 max-w-lg mx-auto" @submit.prevent="handleSubmit">
    <div>
      <label for="school" class="block text-sm font-medium">School Name</label>
      <input
        type="text"
        name="school_name"
        id="school_name"
        placeholder="RUPP"
        v-model="formData.school_name"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
      />
    </div>

    <div>
      <label for="degree" class="block text-sm font-medium">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        v-model="formData.degree"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
      />
    </div>

    <div>
      <label for="major" class="block text-sm font-medium">Major</label>
      <input
        type="text"
        name="major"
        id="major"
        v-model="formData.major"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
      />
    </div>

    <div>
      <label for="start_date" class="block text-sm font-medium"
        >Start Date</label
      >
      <input
        type="date"
        name="start_date"
        id="start_date"
        v-model="formData.start_date"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-200 disabled:dark:bg-gray-600"
      />
    </div>
    <div>
      <label for="end_date" class="block text-sm font-medium">End Date</label>
      <input
        type="date"
        name="end_date"
        id="end_date"
        v-model="formData.end_date"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-200 disabled:dark:bg-gray-600"
      />
    </div>

    <div class="flex justify-end gap-3">
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        Cancel
      </button>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium bg-primary text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        Submit
      </button>
    </div>
  </form>
</template>
