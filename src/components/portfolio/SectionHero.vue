<script setup lang="ts">
import { ArrowDownRight, Github, Linkedin } from "lucide-vue-next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const name = "James Rippeth"

const summary =
  "Full-stack developer. I build and maintain minimal, high-quality applications — with a focus on clarity and performance."

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/jmxor" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/james-rippeth" },
]

const statuses = ["Based in Aylesbury, UK"]
</script>

<template>
  <section id="about">
    <!-- Main heading -->
    <div class="mb-10">
      <h1
        class="mb-4 text-4xl leading-tight font-bold tracking-tight text-balance text-foreground md:text-6xl"
      >
        {{ name }}
      </h1>
      <p class="text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
        {{ summary }}
      </p>
    </div>

    <!-- Status badges -->
    <div class="mb-10 flex flex-wrap gap-2">
      <Badge
        v-for="status in statuses"
        :key="status"
        variant="secondary"
        class="rounded-sm border border-border bg-(--tag-bg) px-3 py-1 font-mono text-xs tracking-wide text-(--tag-fg)"
      >
        {{ status }}
      </Badge>
    </div>

    <Separator class="mb-10" />

    <!-- CTA + Socials -->
    <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      <div class="flex items-center gap-3">
        <Button asChild size="sm" class="rounded-sm px-5 text-xs tracking-widest uppercase">
          <a href="#contact"> Get in touch <ArrowDownRight class="ml-2 h-3.5 w-3.5" /> </a>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          asChild
          class="rounded-sm px-5 text-xs tracking-widest text-muted-foreground uppercase"
        >
          <a href="#projects">View work</a>
        </Button>
      </div>

      <div class="flex items-center gap-1">
        <Button
          v-for="{ icon, label, href } in socialLinks"
          :key="label"
          variant="ghost"
          size="icon"
          asChild
          class="h-8 w-8 rounded-sm text-muted-foreground hover:text-foreground"
        >
          <a :href="href" target="_blank" rel="noopener noreferrer" :aria-label="label">
            <component :is="icon" class="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>
