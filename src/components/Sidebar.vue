<script setup lang="ts">
import { Folder, Play, UserPen, Tag, Book, Type, BriefcaseBusiness, Briefcase } from "lucide-vue-next";
</script>

<template>
  <aside
    class="group w-16 p-4 border hover:w-64 transition-all duration-300 ease-in-out overflow-hidden h-screen"
  >
    <!-- <h2 class="text-xl font-bold mb-6 hidden group-hover:block whitespace-nowrap">Portfolio CMS</h2> -->
    <nav class="space-y-2">
      <RouterLink
        to="/dashboard/about"
        class="flex items-center space-x-2 hover:text-primary"
        ><Type class="w-5 h-5" /><span
          class="hidden group-hover:inline whitespace-nowrap"
          >About</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/skills"
        class="flex items-center space-x-2 hover:text-primary"
        ><Tag class="w-5 h-5" />
        <span class="hidden group-hover:inline whitespace-nowrap"
          >Skill</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/education"
        class="flex items-center space-x-2 hover:text-primary"
        ><Book class="w-5 h-5" />
        <span class="hidden group-hover:inline whitespace-nowrap"
          >Education</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/experience"
        class="flex items-center space-x-2 hover:text-primary"
        ><BriefcaseBusiness class="w-5 h-5" /><span class="hidden group-hover:inline whitespace-nowrap"
          >Experience</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/project"
        class="flex items-center space-x-2 hover:text-primary"
        ><Folder class="w-5 h-5" />
        <span class="hidden group-hover:inline whitespace-nowrap">Project</span>
      </RouterLink>
      <RouterLink
        to="/dashboard/demo"
        class="flex item-center space-x-2 hover:text-primary"
        ><Play class="w-5 h-5" />
        <span class="hidden group-hover:inline whitespace-nowrap"
          >Demo</span
        ></RouterLink
      >
      <RouterLink
        to="/dashboard/contact"
        class="flex items-center space-x-2 hover:text-primary"
        ><UserPen class="w-5 h-5" /><span
          class="hidden group-hover:inline whitespace-nowrap"
          >Contact</span
        ></RouterLink
      >
      <router-view />
    </nav>
  </aside>
</template>

<style scoped></style>
