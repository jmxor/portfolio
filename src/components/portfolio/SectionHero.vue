<script setup lang="ts">
import { ArrowDownRight, Github, Linkedin, Mail, Twitter } from "lucide-vue-next"
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
  <section id="about" class="pt-12 pb-16 md:pt-24 md:pb-24">
    <!-- Top meta line -->
    <div
      class="flex items-center gap-3 mb-10 text-xs text-muted-foreground tracking-widest uppercase"
    >
      <span class="inline-block w-8 h-px bg-border" />
      <span>Portfolio · 2026</span>
    </div>

    <!-- Main heading -->
    <div class="max-w-3xl mb-10">
      <h1
        class="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-balance text-foreground mb-4"
      >
        {{ name }}
      </h1>
      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
        {{ summary }}
      </p>
    </div>

    <!-- Status badges -->
    <div class="flex flex-wrap gap-2 mb-10">
      <Badge
        v-for="status in statuses"
        :key="status"
        variant="secondary"
        class="text-xs px-3 py-1 rounded-sm font-mono tracking-wide border border-border bg-(--tag-bg) text-(--tag-fg)"
      >
        {{ status }}
      </Badge>
    </div>

    <Separator class="mb-10" />

    <!-- CTA + Socials -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <Button asChild size="sm" class="rounded-sm text-xs tracking-widest uppercase px-5">
          <a href="#contact"> Get in touch <ArrowDownRight class="ml-2 h-3.5 w-3.5" /> </a>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          asChild
          class="rounded-sm text-xs tracking-widest uppercase px-5 text-muted-foreground"
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
