<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  role: '',
  company: '',
  start_date: '',
  end_date: '',
  description: '',
})
</script>
<template>
  <form class="space-y-6 max-w-lg mx-auto">
    <div>
      <label for="role" class="block text-sm font-medium">Role</label>
      <input
        type="text"
        name="role"
        id="role"
        v-model="formData.role"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
        placeholder="e.g., Software Engineer"
      />
    </div>
    <div>
      <label for="company" class="block text-sm font-medium">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        v-model="formData.company"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
        placeholder="e.g., ABC Corp"
      />
    </div>
    <div>
      <label for="start_date" class="block text-sm font-medium"
        >Start Date</label
      >
      <input
        type="date"
        name="start_date"
        id="end_date"
        v-model="formData.start_date"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
      />
    </div>
    <div>
      <label for="end_date" class="block text-sm font-medium">Start Date</label>
      <input
        type="date"
        name="end_date"
        id="end_date"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
        v-model="formData.end_date"
      />
    </div>
    <div>
      <label for="description" class="block text-sm font-medium"
        >Description</label
      >
      <textarea
        name="description"
        id="description"
        rows="4"
        v-model="formData.description"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
        placeholder="Describe your role and responsibilities"
      ></textarea>
    </div>
  </form>
</template>
