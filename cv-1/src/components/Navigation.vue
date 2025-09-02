<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-dark-secondary/90 backdrop-blur-lg border-b border-gray-800">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
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
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'text-gray-300 hover:text-white hover:bg-dark-tertiary'
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