<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div
    class="flex items-center gap-3 mb-10 text-xs text-muted-foreground tracking-widest uppercase"
  >
    <span class="inline-block w-8 h-px bg-border" />
    <span>{{ label }}</span>
  </div>
</template>
