<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div
    class="sticky top-14 z-40 flex items-center gap-3 bg-background/80 py-3 text-sm tracking-widest uppercase backdrop-blur-md"
  >
    <span class="border-b-2 border-primary">{{ label }}</span>
  </div>
</template>
