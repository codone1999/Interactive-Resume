<template>
  <div 
    class="bg-dark-secondary border border-gray-800 rounded-xl p-6 hover:bg-dark-tertiary hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10"
    :style="{ animationDelay: `${index * 150}ms` }"
  >
    <div class="flex items-start gap-4">
      <div class="text-4xl">{{ skill.icon }}</div>
      
      <div class="flex-1">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
          <h3 class="text-xl font-semibold text-gray-100">{{ skill.title }}</h3>
        </div>
        
        <p class="text-gray-300 mb-4">{{ skill.description }}</p>
        
        <div class="space-y-2">
          <h4 class="text-sm font-medium text-teal-400">Key Applications:</h4>
          <ul class="space-y-1">
            <li 
              v-for="example in skill.examples" 
              :key="example"
              class="text-sm text-gray-300 flex items-start"
            >
              <span class="text-orange-400 mr-2 mt-1">✓</span>
              {{ example }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftSkillCard',
  props: {
    skill: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>