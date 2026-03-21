<script setup lang="ts">
import { Separator } from "@/components/ui/separator"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"

const education = [
  {
    startDate: new Date("2021-09"),
    endDate: new Date("2025-06"),
    degree: "MSci Computer Science",
    institution: "Cardiff University",
    note: [
      "Achieved First Class Honours and Awarded Best Overall Student MSci Computer Science",
      "Optional modules in Combinatorial Optimization, Large-Scale Databases, Pen-testing and Malware analysis, Distributed Computing and an extra credit module in Virtualization Security.",
      "Won 1st place in an RSA cracking competition as one of only two competitors to complete the task",
    ],
  },
  {
    startDate: new Date("2013-09"),
    endDate: new Date("2021-06"),
    degree: "A Levels",
    institution: "Aylesbury Grammar School",
    note: ["Computer Science: A, Mathematics: A, Chemistry: A ", "Tutored GCSE chemistry students"],
  },
  {
    startDate: new Date("2013-09"),
    endDate: new Date("2021-06"),
    degree: "GCSEs",
    institution: "Aylesbury Grammar School",
    note: [
      "Physics: 9, Computer Science: 8, Chemistry: 8, Biology: 7, Geography: 7, Mathematics: 7, English Language: 7, English Literature: 6, Business: 6, Statistics: 6",
    ],
  },
]
</script>

<template>
  <section id="education">
    <SectionLabel label="Education" />

    <div class="space-y-0">
      <div v-for="(edu, i) in education" :key="i">
        <div class="grid grid-cols-1 gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-12">
          <!-- Date -->
          <div class="shrink-0 pt-1 text-xs tracking-wide text-muted-foreground">
            {{ edu.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) }} —
            {{
              edu.endDate
                ? edu.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                : "Present"
            }}
          </div>

          <!-- Content -->
          <div class="space-y-3">
            <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <h3 class="text-sm font-semibold text-foreground">{{ edu.degree }}</h3>
              <span class="text-xs text-muted-foreground"> {{ edu.institution }} </span>
            </div>

            <div class="space-y-1">
              <p
                v-for="(note, j) in edu.note"
                :key="j"
                class="text-sm leading-relaxed text-muted-foreground"
              >
                {{ note }}
              </p>
            </div>
          </div>
        </div>
        <Separator v-if="i < education.length - 1" />
      </div>
    </div>
  </section>
</template>
