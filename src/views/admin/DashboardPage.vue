<script setup lang="ts">
import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen flex">
    <div class="flex-1 p-4 space-y-6 overflow-y-auto">
      <Header />
      <Sidebar />
    </div>
  </div>
</template>
