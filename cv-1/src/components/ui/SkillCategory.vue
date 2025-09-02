<template>
  <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 animate-slide-up">
    <h3 class="text-xl font-bold mb-4 text-blue-400 capitalize">{{ category }}</h3>
    <div class="space-y-4">
      <SkillBar 
        v-for="skill in skills" 
        :key="skill.name"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
import SkillBar from './SkillBar.vue'

export default {
  name: 'SkillCategory',
  components: {
    SkillBar
  },
  props: {
    category: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>