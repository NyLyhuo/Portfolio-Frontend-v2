<script setup lang="ts"></script>

<template>
  <form class="space-y-6 max-w-lg mx-auto" action="">
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
        class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
      />
    </div>
    <div class="flex justify-end gap-3">
      <button
        type="button"
        class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        Create Project
      </button>
    </div>
  </form>
</template>
