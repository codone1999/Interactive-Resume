<template>
  <section class="animate-fade-in">
    <h2 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
      Education
    </h2>
    <div class="max-w-3xl mx-auto">
      <EducationCard
        v-for="(edu, index) in data"
        :key="edu.id"
        :education="edu"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import EducationCard from '@/components/ui/EducationCard.vue'

export default {
  name: 'EducationSection',
  components: {
    EducationCard
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>