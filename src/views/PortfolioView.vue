<script setup lang="ts">
import SectionContact from "@/components/portfolio/SectionContact.vue"
import SectionEducation from "@/components/portfolio/SectionEducation.vue"
import SectionExperience from "@/components/portfolio/SectionExperience.vue"
import SectionHero from "@/components/portfolio/SectionHero.vue"
import SectionProjects from "@/components/portfolio/SectionProjects.vue"
import SectionSkills from "@/components/portfolio/SectionSkills.vue"
</script>

<template>
  <div class="flex flex-col gap-12 py-12 md:gap-18 md:py-24">
    <SectionHero />
    <SectionExperience />
    <SectionEducation />
    <SectionProjects />
    <SectionSkills />
    <SectionContact />
  </div>
</template>
