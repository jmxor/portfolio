<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-vue-next"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"

const projects = [
  {
    year: "2026",
    name: "Portfolio Website",
    description:
      "An open-source analytics dashboard for self-hosted applications. Features real-time WebSocket updates, customizable widgets, and a role-based permissions system.",
    tags: ["Vue.js", "TypeScript", "Tailwind", "Vite"],
    href: "#",
  },
  {
    year: "Planned",
    name: "CV Builder",
    description:
      "A CV builder that will integrate with the backend of the portfolio website to allow users to tailor PDF CVs by pulling in projects and allowing section reorganisation.",
    tags: ["Vue.js", "TypeScript", "Tailwind", "Vite"],
    href: "#",
  },
]
</script>

<template>
  <section id="projects" class="py-16 md:py-24">
    <SectionLabel label="Projects" />

    <div class="space-y-0">
      <div v-for="(project, i) in projects" :key="i">
        <div class="py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 group">
          <!-- Year -->
          <div class="text-xs text-muted-foreground tracking-wide pt-1 shrink-0">
            {{ project.year }}
          </div>

          <!-- Content -->
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <h3 class="text-sm font-semibold text-foreground">{{ project.name }}</h3>
              <Button
                variant="ghost"
                size="icon"
                asChild
                class="h-5 w-5 rounded-sm text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5"
              >
                <a
                  :href="project.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`View ${project.name}`"
                >
                  <ArrowUpRight class="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <Badge
                v-for="(tag, j) in project.tags"
                :key="j"
                variant="secondary"
                class="text-[10px] px-2 py-0.5 rounded-sm tracking-wide border border-border bg-(--tag-bg) text-(--tag-fg) font-normal"
              >
                {{ tag }}
              </Badge>
            </div>
          </div>
        </div>
        <Separator v-if="i < projects.length - 1" />
      </div>
    </div>
  </section>
</template>
