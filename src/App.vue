<!-- Main App Component -->
<template>
  <MainLayout />
</template>

<script setup lang="ts">
import MainLayout from '@/components/layout/MainLayout.vue'
</script>

<style>
/* Global styles */
@import './style.css';

/* Accessibility focus styles */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Dark mode styles for HTML element */
html.dark {
  color-scheme: dark;
}

/* For improved layout shift metrics */
html {
  scrollbar-gutter: stable;
}
</style>