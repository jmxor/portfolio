<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"

const experiences = [
  {
    startDate: new Date("2025-10-06"),
    endDate: null,
    role: "Graduate Technical Consultant",
    company: "Responsiv Solutions",
    description: [
      "Owned and managed the implementation and deployment of a new Spring Boot and Vue.js application to enable the creation and tracking of B2B offers, alongside the adoption of a new frontend library Shadcn.",
      "Worked as part of a small team implementing multiple usability features, an idempotent bulk ingest endpoint and an obfuscated data export utility in a time tracking and project management application with a Spring Boot backend and Vuetify frontend.",
    ],
    tags: ["Spring Boot", "Vue.js", "PostgreSQL", "Shadcn", "TailwindCSS"],
  },
  {
    startDate: new Date("2023-07"),
    endDate: new Date("2023-09"),
    role: "Software Engineer Intern",
    company: "Lukka Data Solutions",
    description: [
      "Worked as part of a small team of 3 migrating 7 reporting and history features from a legacy application to a newer alternative using NextJS, Tailwind CSS and restful Swagger APIs specifications.",
      "Combined independent work with weekly team and supervisor meetings to ensure that all milestones and features were met 2 weeks earlier than expected.",
      "Implemented 31 custom functional components using Figma style references to aid in the integration of features into the new application.",
    ],
    tags: ["Next.js", "React.js", "TailwindCSS", "OpenAPI"],
  },
  {
    startDate: new Date("2019-09"),
    endDate: new Date("2020-05"),

    role: "Volunteer",
    company: "Stocklacke Park School",
    description: [
      "Organized and led weekly group sporting activities for the students within a team of 4 volunteers.",
      "Provided supervision and engaged with students in small groups to help with their social skills development.",
    ],
    tags: [],
  },
]
</script>

<template>
  <section id="experience" class="py-16 md:py-24">
    <SectionLabel label="Experience" />

    <div class="space-y-0">
      <div v-for="(exp, i) in experiences" :key="i">
        <div class="py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 group">
          <!-- Date -->
          <div class="text-xs text-muted-foreground tracking-wide pt-1 shrink-0">
            {{ exp.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) }} —
            {{
              exp.endDate
                ? exp.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                : "Present"
            }}
          </div>

          <!-- Content -->
          <div class="space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <h3 class="text-sm font-semibold text-foreground">{{ exp.role }}</h3>
              <span class="text-xs text-muted-foreground"> {{ exp.company }} </span>
            </div>
            <p
              v-for="(paragraph, i) in exp.description"
              :key="i"
              class="text-sm text-muted-foreground leading-relaxed"
            >
              {{ paragraph }}
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <Badge
                v-for="tag in exp.tags"
                :key="tag"
                variant="secondary"
                class="text-[10px] px-2 py-0.5 rounded-sm tracking-wide border border-border bg-(--tag-bg) text-(--tag-fg) font-normal"
              >
                {{ tag }}
              </Badge>
            </div>
          </div>
        </div>
        <Separator v-if="i < experiences.length - 1" />
      </div>
    </div>
  </section>
</template>
