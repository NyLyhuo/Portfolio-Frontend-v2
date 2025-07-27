<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';


const authStore = useAuthStore();
</script>

<template>
    <h2>Hello, {{ authStore.user.name }}</h2>
</template>