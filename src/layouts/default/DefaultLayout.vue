<script setup lang="ts">
import AppFooter from "@/layouts/default/AppFooter.vue"
import AppHeader from "@/layouts/default/AppHeader.vue"
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    <main class="pt-14 max-w-3xl mx-auto px-6 md:px-8">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
