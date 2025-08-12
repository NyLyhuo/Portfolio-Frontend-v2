<script setup lang="ts">
import { Plus, X, Github } from "lucide-vue-next";
import { useProjectStore } from "../../stores/project";
import { onMounted, reactive, ref } from "vue";
import CreateProject from "../../components/CreateProject.vue";

const showModal = ref(false);
function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
const projectStore = useProjectStore();

onMounted(() => {
  projectStore.fetchProject();
});
</script>

<template>
  <div class="min-h-screen flex flex-col items-center p-6">
    <div class="mb-6 flex items-center justify-between w-full max-w-2xl">
      <h2 class="text-2xl font-bold tracking-tight">Project</h2>
      <button @click="openModal" class="cursor-pointer"><plus /></button>
    </div>

    <div class="w-full max-w-2xl space-y-4">
      <p>Your project:</p>
      <ul v-if="projectStore.project && projectStore.project.length">
        <li v-for="project in projectStore.project" :key="project.id">
          <div class="border rounded-lg overflow-hidden">
            <img
              class="w-full h-40 object-cover mb-3"
              :src="project.image"
              alt="img"
            />
            <h3 class="text-lg font-bold">{{ project.title }}</h3>
            <p class="text-sm mb-2">{{ project.description }}</p>
            <div class="flex items-center space-x-2 mb-2">
              <span
                v-for="tech in project.tech_stack"
                :key="tech"
                class="px-2 py-1 border rounded-md text-sm"
                >{{ tech }}</span
              >
            </div>
            <div class="flex items-center space-x-4 mb-2">
              <a
                class="text-blue-500 hover:underline"
                href="{{project.github_link}}"
                >Github</a
              >
              <a
                class="text-blue-500 hover:underline"
                href="{{ project.live_link }}"
                >Demo</a
              >
            </div>
          </div>
          <div>
            <button class="ml-2 text-blue-500 hover:underline">Edit</button>
            <button class="ml-2 text-red-500 hover:underline">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-lg"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Create Project</h2>
          <button @click="closeModal" class="cursor-pointer hover:text-red-600">
            <X />
          </button>
        </div>
        <CreateProject />
      </div>
      
    </div>
  </div>
</template>

<style scoped></style>
