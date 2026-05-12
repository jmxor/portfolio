<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"
import ArticleLayout from "@/components/portfolio/ArticleLayout.vue"

const skillGroups = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "Python", "Rust", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    items: ["Vue.js", "Tailwind CSS", "Vite", "React.js", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Flask", "PostgreSQL", "GraphQL", "MongoDB"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "CI/CD", "GitHub Actions"],
  },
]

// TODO: Add proficiency levels (e.g. "Proficient", "Familiar", "Learning") or 1 to 5 scale and visually
//  differentiate them (e.g. different badge colors or icons)
</script>

<template>
  <section id="skills">
    <SectionLabel label="Skills" />

    <ArticleLayout v-for="(group, i) in skillGroups" :key="i">
      <template #label>
        {{ group.category }}
      </template>

      <template #content>
        <div class="flex flex-wrap gap-1.5">
          <Badge
            v-for="(item, j) in group.items"
            :key="j"
            variant="secondary"
            class="rounded-sm border border-border bg-(--tag-bg) px-2.5 py-1 text-[10px] font-normal tracking-wide text-(--tag-fg)"
          >
            {{ item }}
          </Badge>
        </div>
      </template>
    </ArticleLayout>
  </section>
</template>
