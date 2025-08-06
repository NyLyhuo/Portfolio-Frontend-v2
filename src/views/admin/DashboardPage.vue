<script setup lang="ts">
import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Header />
      <main class="p-4 space-y-6 flex-1 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
