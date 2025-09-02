<template>
  <section class="animate-fade-in">
    <h2 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Skills & Technologies
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SkillCategory 
        v-for="(skills, category) in skillCategories" 
        :key="category"
        :category="category"
        :skills="skills"
      />
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import SkillCategory from '@/components/ui/SkillCategory.vue'

export default {
  name: 'SkillsSection',
  components: {
    SkillCategory
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const skillCategories = computed(() => {
      const categories = {}
      props.data.forEach(skill => {
        if (!categories[skill.category]) {
          categories[skill.category] = []
        }
        categories[skill.category].push(skill)
      })
      return categories
    })
    
    return {
      skillCategories
    }
  }
}
</script>
