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
  <section id="projects">
    <SectionLabel label="Projects" />

    <div class="space-y-0">
      <div v-for="(project, i) in projects" :key="i">
        <div class="group grid grid-cols-1 gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-12">
          <!-- Year -->
          <div class="shrink-0 pt-1 text-xs tracking-wide text-muted-foreground">
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
                class="-mt-0.5 h-5 w-5 rounded-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground"
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
            <p class="text-sm leading-relaxed text-muted-foreground">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <Badge
                v-for="(tag, j) in project.tags"
                :key="j"
                variant="secondary"
                class="rounded-sm border border-border bg-(--tag-bg) px-2 py-0.5 text-[10px] font-normal tracking-wide text-(--tag-fg)"
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
