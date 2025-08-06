<script setup lang="ts">
import {
  Folder,
  Play,
  UserPen,
  Tag,
  Book,
  Type,
  BriefcaseBusiness,
} from "lucide-vue-next";
</script>

<template>
  <aside
    class="group h-screen w-16 hover:w-64 transition-all duration-300 ease-in-out overflow-hidden border-r sticky top-0"
  >
    <nav class="p-4 space-y-6">
      <RouterLink
        to="/dashboard/about"
        class="flex items-center space-x-2 hover:text-primary"
        ><Type class="w-5 h-5 shrink-0" /><span
          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >About</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/skills"
        class="flex items-center space-x-2 hover:text-primary"
        ><Tag class="w-5 h-5 shrink-0" />
        <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >Skill</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/education"
        class="flex items-center space-x-2 hover:text-primary"
        ><Book class="w-5 h-5 shrink-0" />
        <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >Education</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/experience"
        class="flex items-center space-x-2 hover:text-primary"
        ><BriefcaseBusiness class="w-5 h-5 shrink-0" /><span
          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >Experience</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/project"
        class="flex items-center space-x-2 hover:text-primary"
        ><Folder class="w-5 h-5 shrink-0" />
        <span
          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >Project</span
        >
      </RouterLink>
      <RouterLink
        to="/dashboard/demo"
        class="flex item-center space-x-2 hover:text-primary"
        ><Play class="w-5 h-5 shrink-0" />
        <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Demo</span></RouterLink
      >
      <RouterLink
        to="/dashboard/contact"
        class="flex items-center space-x-2 hover:text-primary"
        ><UserPen class="w-5 h-5 shrink-0" /><span
          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >Contact</span
        ></RouterLink
      >
    </nav>
  </aside>
</template>

<style scoped></style>
