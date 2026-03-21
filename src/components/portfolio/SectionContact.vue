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

    <div class="max-w-xl mb-12">
      <p class="text-base text-muted-foreground leading-relaxed">
        {{ preface }}
      </p>
    </div>

    <div class="space-y-0">
      <div v-for="(link, i) in links" :key="link.label">
        <div class="py-5 flex items-center justify-between group">
          <span class="text-xs text-muted-foreground tracking-widest uppercase">
            {{ link.label }}
          </span>
          <a
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group/link"
          >
            {{ link.value }}
            <ArrowUpRight
              class="h-3.5 w-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity"
            />
          </a>
        </div>
        <Separator v-if="i < links.length - 1" />
      </div>
    </div>
  </section>
</template>
