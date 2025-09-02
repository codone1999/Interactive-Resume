<template>
  <div
    class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-in group"
    :style="{ animationDelay: index * 0.2 + 's' }"
  >
    <h3 class="text-xl font-bold mb-3 text-blue-400 group-hover:text-purple-400 transition-colors">
      {{ project.name }}
    </h3>
    <p class="text-gray-300 mb-4">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <TechBadge
        v-for="tech in project.tech"
        :key="tech"
        :tech="tech"
      />
    </div>
    
    <!-- Updated link section with proper GitHub handling -->
    <div class="flex items-center justify-between">
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        @click="handleProjectClick"
        class="inline-flex items-center space-x-2 text-blue-400 hover:text-purple-400 transition-colors group-hover:translate-x-1 transform duration-300"
      >
        <span>{{ linkText }}</span>
        <span>{{ linkIcon }}</span>
      </a>
      
      <!-- GitHub link if different from main link -->
      <a 
        v-if="project.github && project.github !== project.link"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
        title="View on GitHub"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span class="text-xs">GitHub</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TechBadge from './TechBadge.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

// Computed properties for dynamic link handling
const linkText = computed(() => {
  if (props.project.link === '#' || !props.project.link) {
    return 'Demo Coming Soon'
  }
  
  if (props.project.link.includes('github.com')) {
    return 'View on GitHub'
  }
  
  if (props.project.link.includes('demo') || props.project.link.includes('app')) {
    return 'Live Demo'
  }
  
  return 'View Project'
})

const linkIcon = computed(() => {
  if (props.project.link === '#' || !props.project.link) {
    return '🚧'
  }
  
  if (props.project.link.includes('github.com')) {
    return '🔗'
  }
  
  return '→'
})

// Handle click events
const handleProjectClick = (event) => {
  if (props.project.link === '#' || !props.project.link) {
    event.preventDefault()
    alert('Project demo coming soon!')
    return
  }
  
  // Let the default link behavior handle the rest
}
</script>