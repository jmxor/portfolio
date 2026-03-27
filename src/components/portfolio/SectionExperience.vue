<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"
import ArticleLayout from "@/components/portfolio/ArticleLayout.vue";

const experiences = [
  {
    startDate: new Date("2025-10-06"),
    endDate: null,
    role: "Graduate Technical Consultant",
    company: "Responsiv Solutions",
    description: [
      "Owned and managed the implementation and deployment of several Spring Boot and Vue.js applications. Led the adoption of a new frontend library Shadcn. Assisted in the development and maintainance of multiple customer projects using IBM ACE, MQ, BAW and DB2.",
    ],
    tags: ["Spring Boot", "Vue.js", "PostgreSQL", "Shadcn", "TailwindCSS"],
  },
  {
    startDate: new Date("2023-07"),
    endDate: new Date("2023-09"),
    role: "Software Engineer Intern",
    company: "Lukka Data Solutions",
    description: [
      "Worked as part of a small team migrating reporting and history features from a legacy application to a new website using NextJS, Tailwind CSS and Open API specifications. Close collaboration within the team allowed the project goals to be met 2 weeks earlier than expected.",
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
  <section id="experience">
    <SectionLabel label="Experience" />

      <ArticleLayout v-for="(exp, i) in experiences" :key="i">
        <template #label>
          {{ exp.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) }} —
          {{
            exp.endDate
              ? exp.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
              : "Present"
          }}
        </template>


        <template #content>
          <div class="space-y-3">
            <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <h3 class="text-sm font-semibold text-foreground">{{ exp.role }}</h3>
              <span class="text-xs text-muted-foreground"> {{ exp.company }} </span>
            </div>
            <p
              v-for="(paragraph, i) in exp.description"
              :key="i"
              class="text-sm leading-relaxed text-muted-foreground"
            >
              {{ paragraph }}
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <Badge
                v-for="tag in exp.tags"
                :key="tag"
                variant="secondary"
                class="rounded-sm border border-border bg-(--tag-bg) px-2 py-0.5 text-[10px] font-normal tracking-wide text-(--tag-fg)"
              >
                {{ tag }}
              </Badge>
            </div>
          </div>
        </template>
      </ArticleLayout>
  </section>
</template>
