<script setup lang="ts">
import { Separator } from "@/components/ui/separator"
import SectionLabel from "@/components/portfolio/SectionLabel.vue"
import { ArrowUpRight } from "lucide-vue-next"

const preface = ""

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
  <section id="contact" class="py-16 md:py-24">
    <SectionLabel label="Contact" />

    <div class="mb-12 max-w-xl">
      <p class="text-base leading-relaxed text-muted-foreground">
        {{ preface }}
      </p>
    </div>

    <div class="space-y-0">
      <div v-for="(link, i) in links" :key="link.label">
        <div class="group flex items-center justify-between py-5">
          <span class="text-xs tracking-widest text-muted-foreground uppercase">
            {{ link.label }}
          </span>
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
        </div>
        <Separator v-if="i < links.length - 1" />
      </div>
    </div>
  </section>
</template>
