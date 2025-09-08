<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next'
import { useProjectStore } from '../../stores/project'
import { onMounted, ref } from 'vue'
import ProjectForm from '../../components/ProjectForm.vue'

const projectStore = useProjectStore()
const showModal = ref(false)
const modalMode = ref<'create' | 'edit'>('create')
const selectedProject = ref(null)

function openCreateModal() {
  modalMode.value = 'create'
  selectedProject.value = null
  showModal.value = true
}

function openEditModal(project: any) {
  modalMode.value = 'edit'
  selectedProject.value = project
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

onMounted(() => {
  projectStore.fetchProject()
})
</script>
<template>
  <div class="min-h-screen flex flex-col items-center p-6">
    <div class="mb-6 flex items-center justify-between w-full max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight">Projects</h2>
      <button
        @click="openCreateModal"
        class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow hover:bg-hover transition"
      >
        <plus class="w-5 h-5" />
        Add Project
      </button>
    </div>

    <div
      class="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="proj ect in projectStore.projects"
        :key="project.id"
        class="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
      >
        <img
          class="w-full h-48 object-cover"
          :src="project.image"
          alt="Project Image"
        />

        <div class="p-4">
          <h3 class="text-lg font-semibold mb-1">{{ project.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tech in project.tech_stack"
              :key="tech"
              class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 border rounded-md"
              >{{ tech }}</span
            >
          </div>

          <div class="flex gap-3 mb-3">
            <a
              :href="project.github_link"
              target="_blank"
              class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >GitHub</a
            >
            <a
              :href="project.live_link"
              target="_blank"
              class="px-3 py-1 text-sm bg-primary text-white rounded-md hover:bg-hover transition"
              >Live Demo</a
            >
          </div>

          <!-- Actions -->
          <div class="flex justify-end gap-2">
            <button
              @click="openEditModal(project)"
              class="text-sm text-primary hover:underline"
            >
              Edit
            </button>
            <button
              @click="projectStore.deleteProject(project.id)"
              class="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-lg"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">
            {{ modalMode === 'create' ? 'Create Project' : 'Edit Project' }}
          </h2>
          <button @click="closeModal" class="cursor-pointer hover:text-red-600">
            <X />
          </button>
        </div>
        <ProjectForm
          :mode="modalMode"
          :project="selectedProject"
          @close="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
