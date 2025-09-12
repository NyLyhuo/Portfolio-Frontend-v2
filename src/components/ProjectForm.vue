<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useProjectStore } from '../stores/project'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const props = defineProps<{
  mode: 'create' | 'edit'
  project?: {
    id?: number
    title: string
    description: string
    tech_stack: string[]
    github_link: string
    live_link: string
    image?: string
  } | null
}>()

const emit = defineEmits(['close'])
const projectStore = useProjectStore()
const toast = useToast()
const previewImage = ref('')

const formData = reactive({
  title: '',
  description: '',
  tech_stack: [] as string[],
  github_link: '',
  live_link: '',
  image: null as File | null,
})

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    formData.image = target.files[0]
    previewImage.value = URL.createObjectURL(target.files[0])
  }
}

async function handleSubmit() {
  if (props.mode === 'create') {
    try {
      await projectStore.createProject(formData)
      toast.success('Project created successfully!', {
        position: 'top-right',
        duration: 3000,
      })
    } catch (error) {
      toast.error('Failed to create project. Please try again.', {
        position: 'top-right',
        duration: 4000,
      })
    }
  } else {
    await projectStore.updateProject(props.project!.id!, formData)
  }
  emit('close')
}

onMounted(() => {
  if (props.mode === 'edit' && props.project) {
    Object.assign(formData, {
      title: props.project.title,
      description: props.project.description,
      tech_stack: [...props.project.tech_stack],
      github_link: props.project.github_link,
      live_link: props.project.live_link,
      image: null,
    })
    previewImage.value = props.project.image || ''
  }
})

watch(
  () => props.project,
  (newProject) => {
    if (props.mode === 'edit' && newProject) {
      Object.assign(formData, {
        title: newProject.title,
        description: newProject.description,
        tech_stack: [...newProject.tech_stack],
        github_link: newProject.github_link,
        live_link: newProject.live_link,
        image: null,
      })
      previewImage.value = newProject.image || ''
    }
  },
  { immediate: true }
)
</script>

<template>
  <form class="space-y-6 max-w-lg mx-auto" @submit.prevent="handleSubmit">
    <div>
      <label
        for="title"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >Title</label
      >
      <input
        type="text"
        name="title"
        id="title"
        v-model="formData.title"
        required
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <div>
      <label
        for="description"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >Description</label
      >
      <input
        type="text"
        name="description"
        id="description"
        v-model="formData.description"
        required
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
      />
    </div>
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Tech Stack
      </label>
      <div class="flex flex-wrap gap-4">
        <label
          class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <input
            type="checkbox"
            value="Vue.js"
            v-model="formData.tech_stack"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Vue.js
        </label>
        <label
          class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <input
            type="checkbox"
            value="TailwindCSS"
            v-model="formData.tech_stack"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Tailwind CSS
        </label>
        <label
          class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <input
            type="checkbox"
            value="Laravel"
            v-model="formData.tech_stack"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Laravel
        </label>
      </div>
    </div>
    <div class="space-y-1">
      <label
        for="github_link"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        GitHub Link
      </label>
      <input
        type="url"
        id="github_link"
        name="github_link"
        placeholder="https://github.com/username/project"
        v-model="formData.github_link"
        required
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
    <div class="space-y-1">
      <label
        for="live_link"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Live Demo
      </label>
      <input
        type="url"
        id="live_link"
        name="live_link"
        placeholder="https://example.com"
        v-model="formData.live_link"
        required
        class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
    <div class="space-y-1">
      <label
        for="image"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Project Image
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        @change="handleFileUpload"
        class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
      />
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
        class="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        {{ props.mode === 'create' ? 'Create' : 'Update' }} Project
      </button>
    </div>
  </form>
</template>
