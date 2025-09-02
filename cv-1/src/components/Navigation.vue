<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {{ profileName }}
        </h1>
        <div class="flex space-x-6">
          <button 
            v-for="section in sections" 
            :key="section.id"
            @click="$emit('section-change', section.id)"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2',
              activeSection === section.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            ]"
          >
            <span>{{ section.icon }}</span>
            <span class="hidden md:inline">{{ section.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    sections: {
      type: Array,
      required: true
    },
    activeSection: {
      type: String,
      required: true
    },
    profileName: {
      type: String,
      required: true
    }
  },
  emits: ['section-change', 'download']
}
</script>