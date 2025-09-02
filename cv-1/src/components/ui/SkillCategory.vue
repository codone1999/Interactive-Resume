<template>
  <div class="bg-dark-secondary border border-gray-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 animate-slide-up hover:shadow-lg hover:shadow-teal-500/10">
    <h3 class="text-xl font-bold mb-4 text-teal-400 capitalize">{{ category }}</h3>
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