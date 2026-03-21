<script setup lang="ts">
import AppHeader from "@/layouts/default/AppHeader.vue"
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    <main class="pt-14 max-w-3xl mx-auto px-6 md:px-8">
      <slot />
    </main>
  </div>
</template>
