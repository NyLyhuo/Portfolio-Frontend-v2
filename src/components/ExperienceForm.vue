<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { useExperienceStore } from '../stores/experience'
import { useToast } from 'vue-toast-notification'

const experienceStore = useExperienceStore()
const toast = useToast()

const props = defineProps<{
  mode: 'Create' | 'Edit'
  experience?: any
}>()
const emit = defineEmits(['close'])

const formData = reactive({
  role: '',
  company: '',
  start_date: '',
  end_date: '',
  is_present: false,
  description: '',
})

watchEffect(() => {
  if (props.mode === 'Edit' && props.experience) {
    formData.role = props.experience.role
    formData.company = props.experience.company
    formData.start_date = props.experience.start_date
    formData.end_date = props.experience.end_date || ''
    formData.is_present = props.experience.end_date === null
    formData.description = props.experience.description
  }
})
function handleSubmit() {
  if (props.mode === 'Create') {
    experienceStore.createExperience(formData)
    toast.success('Experience created successfully!', {
      position: 'top-right',
      duration: 3000,
    })

    Object.assign(formData, {
      role: '',
      company: '',
      start_date: '',
      end_date: '',
      is_present: false,
      description: '',
    })
  } else {
    experienceStore.updateExperience(props.experience.id, formData)
    toast.success('Experience updated successfully!', {
      position: 'top-right',
      duration: 3000,
    })
  }
}
</script>
<template>
  <form class="space-y-6 max-w-lg mx-auto" @submit.prevent="handleSubmit">
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
        id="start_date"
        v-model="formData.start_date"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
      />
    </div>

    <div>
      <label for="end_date" class="block text-sm font-medium">End Date</label>
      <input
        type="date"
        name="end_date"
        id="end_date"
        :disabled="formData.is_present"
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-200 disabled:dark:bg-gray-600"
        v-model="formData.end_date"
      />
      <div class="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="present"
          v-model="formData.is_present"
          class="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
        />
        <label for="present">I currently working here</label>
      </div>
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

    <div class="flex justify-end gap-3">
      <button
        type="button"
        @click="$emit('close')"
        class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        {{ props.mode === 'Create' ? 'Create' : 'Update' }}
      </button>
    </div>
  </form>
</template>
