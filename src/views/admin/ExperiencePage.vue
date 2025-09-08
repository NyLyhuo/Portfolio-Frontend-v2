<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col item-center p-6">
    <div class="mb-6 flex items-center justify-between w-full max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight">Experience</h2>
      <button
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
          <tr>
            <td class="px-6 py-4">Fronted Developer</td>
            <td class="px-6 py-4">Company X</td>
            <td class="px-6 py-4">2023-01</td>
            <td class="px-6 py-4">Present</td>
            <td class="px-6 py-4">design</td>
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
  </div>
</template>

<style scoped></style>
