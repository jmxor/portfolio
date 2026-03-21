<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"

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
// differentiate them (e.g. different badge colors or icons)
</script>

<template>
  <section id="skills" class="py-16 md:py-24">
    <SectionLabel label="Skills" />

    <div class="space-y-0">
      <div v-for="(group, i) in skillGroups" :key="group.category">
        <div class="grid grid-cols-1 gap-4 py-6 md:grid-cols-[180px_1fr] md:gap-12">
          <div class="shrink-0 pt-1 text-xs tracking-wide text-muted-foreground">
            {{ group.category }}
          </div>
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
        </div>
        <Separator v-if="i < skillGroups.length - 1" />
      </div>
    </div>
  </section>
</template>
