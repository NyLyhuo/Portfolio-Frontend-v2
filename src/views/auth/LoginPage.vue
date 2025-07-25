<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "../../stores/auth";

const formData = reactive({
  email: "",
  password: "",
});

const authStore = useAuthStore();

async function handleLogin() {
  try {
    await authStore.login(formData.email, formData.password);
    console.log("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-6 rounded-lg shadow-md">
      <div class="flex justify-center mb-6">
        <img src="/src/assets/logo.svg" alt="logo" class="h-10" />
      </div>
      <h2 class="text-2xl font-bold text-center mb-6 tracking-tight">
        Hello H5
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="space-y-1">
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            v-model="formData.email"
            class="block w-full px-3 py-1.5 rounded-md text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
            placeholder="Enter your email"
            required
            autocomplete="email"
          />
        </div>

        <div class="space-y-1">
          <label
            for="password"
            class="block text-sm/6 font-medium text-gray-900"
            >Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            v-model="formData.password"
            class="block w-full px-3 py-1.5 rounded-md text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
            placeholder="Enter your password"
            required
            autocomplete="current-password"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-md bg-primary px-3 py-1.5 text-base font-semibold text-white hover:bg-hover focus:outline-2 focus:outline-primary transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>