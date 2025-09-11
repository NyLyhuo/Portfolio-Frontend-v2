<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { Moon, Sun, LogOut } from 'lucide-vue-next'

const isDarkMode = ref(false)
const authStore = useAuthStore()

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value))
}

function logout() {
  authStore.logout()
  window.location.href = '/login'
}
onMounted(() => {
  const saveDarkMode = localStorage.getItem('darkMode')
  if (saveDarkMode) {
    isDarkMode.value = JSON.parse(saveDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
})
</script>

<template>
  <header class="flex items-center justify-between p-4">
    <div class="flex items-center space-x-4">
      <img class="w-8 h-auto" src="../assets/logo.svg" alt="logo" />
      <RouterLink to="/dashboard" class="text-primary font-bold">{{
        authStore.user.name
      }}</RouterLink>
    </div>

    <div class="flex items-center space-x-4">
      <button
        @click="toggleTheme"
        class="cursor-pointer hover:text-primary dark:hover:text-white"
      >
        <component :is="isDarkMode ? Sun : Moon" />
      </button>
      <button
        @click="logout"
        class="hover:text-primary dark:hover:text-white cursor-pointer"
      >
        <LogOut />
      </button>
    </div>
  </header>
</template>

<style scoped></style>
