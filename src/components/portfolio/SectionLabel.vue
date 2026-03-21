<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="mb-10 flex items-center gap-3 text-sm tracking-widest uppercase">
    <span class="border-b-2 border-primary">{{ label }}</span>
  </div>
</template>
