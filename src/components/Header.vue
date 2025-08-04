<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { Moon, Sun, LogOut, Menu } from "lucide-vue-next";

const isDarkMode = ref(false);
function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
}

const authStore = useAuthStore();
function toggleAside() {
  const sidebar = document.querySelector("aside");
  if (sidebar) {
    sidebar.classList.toggle("w-64");
  }
}
function logout() {
  authStore.logout();
  window.location.href = "/login"; // Redirect to login page after logout
}
onMounted(() => {
  const saveDarkMode = localStorage.getItem("darkMode");
  if (saveDarkMode) {
    isDarkMode.value = JSON.parse(saveDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});
</script>

<template>
  <header class="flex items-center justify-between p-4">
    <div class="flex items-center space-x-4">
      <button @click="toggleAside"><Menu /></button>
      <img class="w-8 h-auto" src="../assets/logo.svg" alt="logo" />
      <RouterLink to="/dashboard" class="text-primary font-bold">{{
        authStore.user.name
      }}</RouterLink>
    </div>

    <div class="flex items-center space-x-4">
      <button
        @click="toggleTheme"
        class="hover:text-primary dark:hover:text-white"
      >
        <component :is="isDarkMode ? Moon : Sun" />
      </button>
      <button @click="logout" class="hover:text-primary dark:hover:text-white">
        <LogOut />
      </button>
    </div>
  </header>
</template>

<style scoped></style>
