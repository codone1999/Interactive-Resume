<template>
  <section class="animate-fade-in">
    <h2 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Soft Skills
    </h2>
    <div class="space-y-8">
      <SoftSkillCard
        v-for="(skill, index) in data"
        :key="skill.id"
        :skill="skill"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import SoftSkillCard from '@/components/ui/SoftSkillCard.vue'

export default {
  name: 'SoftSkillsSection',
  components: {
    SoftSkillCard
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>