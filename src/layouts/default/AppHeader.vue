<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-vue-next"
import { useColorMode } from "@vueuse/core"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

// Note: This simple scroll handler may be replaced with vueUse useScroll in the future.
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  handleScroll()
  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

// Note: can pass { disableTransition: false }
const mode = useColorMode()
</script>

<template>
  <header
    :class="
      cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md',
        isScrolled && ' border-b border-border',
      )
    "
  >
    <nav class="max-w-3xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
      <!-- Brand -->
      <a
        href="#about"
        class="text-xs font-semibold tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors"
      >
        JR
      </a>

      <!-- Nav links — hidden on mobile -->
      <ul class="hidden md:flex items-center gap-6">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Theme toggle -->
      <Button
        variant="ghost"
        size="icon"
        @click="mode = mode === 'light' ? 'dark' : 'light'"
        class="h-8 w-8 rounded-sm text-muted-foreground hover:text-foreground"
        aria-label="Toggle theme"
      >
        <Sun v-if="mode === 'light'" class="h-4 w-4" />
        <Moon v-else class="h-4 w-4" />
      </Button>
    </nav>
  </header>
</template>
