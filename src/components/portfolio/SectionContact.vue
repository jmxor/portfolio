<script setup lang="ts">
import SectionLabel from "@/components/portfolio/SectionLabel.vue"
import { ArrowUpRight } from "lucide-vue-next"
import ArticleLayout from "@/components/portfolio/ArticleLayout.vue";

const links = [
  { label: "GitHub", value: "github.com/jmxor", href: "https://github.com/jmxor" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/james-rippeth",
    href: "https://linkedin.com/in/james-rippeth",
  },
]
</script>

<template>
  <section id="contact">
    <SectionLabel label="Contact" />

    <ArticleLayout v-for="(link, i) in links" :key="i">
      <template #label>
        {{ link.label }}
      </template>
      <template #content>
        <a
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group/link flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
        >
          {{ link.value }}
          <ArrowUpRight
            class="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/link:opacity-100"
          />
        </a>
      </template>
    </ArticleLayout>
  </section>
</template>
