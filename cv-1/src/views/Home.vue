<template>
  <div class="min-h-screen">
    <Navigation
      :sections="sections"
      :active-section="activeSection"
      :profile-name="profileData.name"
      @section-change="setActiveSection"
      @download="downloadResume"
    />
   
    <main class="pt-20 pb-10">
      <div class="max-w-6xl mx-auto px-4">
        <transition name="fade" mode="out-in">
          <component
            :is="currentComponent"
            :data="sectionData"
            :key="activeSection"
          />
        </transition>
      </div>
    </main>
   
    <FloatingActionButton @click="downloadResume" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { profileData, navigationSections } from '@/data/profile.js'
import Navigation from '@/components/Navigation.vue'
import FloatingActionButton from '@/components/FloatingActionButton.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SoftSkillsSection from '@/components/sections/SoftSkillsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    FloatingActionButton,
    AboutSection,
    SoftSkillsSection,
    SkillsSection,
    ProjectsSection,
    EducationSection
  },
  setup() {
    const activeSection = ref('about')
    const sections = navigationSections
   
    const componentMap = {
      about: 'AboutSection',
      softskills: 'SoftSkillsSection',
      skills: 'SkillsSection',
      projects: 'ProjectsSection',
      education: 'EducationSection'
    }
   
    const currentComponent = computed(() => componentMap[activeSection.value])
   
    const sectionData = computed(() => {
      switch (activeSection.value) {
        case 'about':
          return profileData
        case 'softskills':
          return profileData.softSkills
        case 'skills':
          return profileData.skills
        case 'projects':
          return profileData.projects
        case 'education':
          return profileData.education
        default:
          return null
      }
    })
   
    const setActiveSection = (sectionId) => {
      activeSection.value = sectionId
    }
   
    const downloadResume = () => {
      alert('Resume download functionality would be implemented here!')
    }
   
    return {
      activeSection,
      sections,
      profileData,
      currentComponent,
      sectionData,
      setActiveSection,
      downloadResume
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>