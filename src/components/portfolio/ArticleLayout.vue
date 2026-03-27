<script setup lang="ts">

</script>

<template>
  <article class="group grid grid-cols-1 gap-4 py-4 md:grid-cols-[150px_1fr] md:gap-8">
    <div class="shrink-0 pt-1 text-xs tracking-wide text-muted-foreground">
      <slot name="label" />
    </div>

    <div>
      <slot name="content"/>
    </div>
  </article>
</template>
